# Agrify Carbon — CLAUDE.md

## Project Overview

A carbon marketplace app with payment functionality built on Next.js 13 (App Router).
Handles both unauthenticated visitors and authenticated users. Payment flows and
blockchain interactions (XRPL) must work flawlessly and securely.

## Setup — Before Migration Begins

- Install TanStack Query: `npm install @tanstack/react-query @tanstack/react-query-devtools`
- Verify build passes: `npm run build`

> **Note:** `@tanstack/react-query` is NOT yet in `package.json` and is not installed.
> All data fetching currently uses raw axios + useEffect. Do not write any TanStack Query
> code until the install step above is done.

## Current Migration Goals

1. Migrate all data fetching from raw axios to TanStack Query (React Query v5)
2. Fix auth-guard logic:
   - **Bug 1 (current):** Unauthenticated users can reach all protected routes — the redirect
     in `AuthContext.tsx:57` is commented out. When restored, it must redirect back to the last
     unauthenticated page the user was on (not to `/auth/login`) — this is the intended UX
   - **Bug 2 (latent — fix before restoring redirect):** `AuthContext` re-runs `handleUser` on
     every route change because `[pathname, isUnauthenticated]` are in its dependency array.
     The `setTimeout(..., 1000)` inside also creates a race condition. This will cause incorrect
     redirects mid-navigation once the redirect is active — fix the dependency array and remove
     the `setTimeout` first
3. Tighten token storage — keep localStorage but store only the access token; no user data or
   sensitive info in localStorage. Two existing violations to fix:
   - `selected_climate_art` — full project JSON written to localStorage before the purchase flow
   - `sourcing_tool_form` — full form state persisted from the sourcing tool
4. Separate visitor and authenticated user route handling cleanly

## Tech Stack

- **Framework:** Next.js 13.5 — App Router (`app/`)
- **Styling:** Chakra UI v2 + Emotion (do not modify theme config or visual styles)
- **Auth:** JWT in localStorage (client-side only, intentional) — axios interceptor reads from
  `localStorage.getItem("access_token")`. Do not move this to server-side or add middleware.
- **Data fetching:** Axios → migrating to TanStack Query
- **Payments:** Integrated (touch with caution)
- **Blockchain:** XRPL via `xrpl` and `@nice-xrpl/react-xrpl`

## Architecture Rules

### Auth & Route Protection

- Clearly distinguish public routes (visitor) from protected routes (authenticated user)
- Never redirect unauthenticated users unless they explicitly hit a protected route
- Auth state must be fully resolved before any redirect decision is made — no premature redirects
- When an unauthenticated user hits a protected route, redirect them back to the last
  unauthenticated page they were on — not to `/auth/login`
- Redirect logic must be stable across route changes — fix `AuthContext` dependency array and
  remove the `setTimeout` before restoring the redirect (see Bug 2 above)
- Token validation and redirect logic must be centralized — do not duplicate auth checks across pages
- All auth is intentionally client-side. Do not add `middleware.ts` or move auth to the server.
  The axios interceptor reads from localStorage and that is the correct pattern for this project.

### Token Storage

- Keep localStorage as the storage mechanism — this is intentional and must not be migrated
- Store only the access token (`access_token`) in localStorage
- No user profile data, roles, sensitive identifiers, or form state in localStorage
- User data should be fetched from the API and held in memory (context or query cache) only
- `selected_climate_art` and `sourcing_tool_form` currently violate this — remove them

### Data Fetching (TanStack Query)

- All new data fetching must use TanStack Query (`@tanstack/react-query`)
- Remove axios instances incrementally — do not refactor fetching and logic in the same step
- Use query keys consistently: `['resource', id]` pattern
- Errors from queries must surface meaningfully to the UI — no silent failures
- Sensitive data (payment, user profile) must not persist in query cache beyond session

### Security

- No secrets, tokens, or sensitive identifiers in URL params or query strings
- Payment-related state must never be stored in localStorage
- Sanitize all user inputs before they reach any API call
- Do not log sensitive response data to the console
- Never expose API keys or env variables to the client — use `NEXT_PUBLIC_` prefix only when truly necessary

## Code Quality & General Cleanup

### General Practices

- Prefer named exports over default exports for components and utilities
- No unused imports, variables, or dead code — remove as you go
- Keep components single-responsibility — if a component is doing too much, flag it
- Co-locate related logic (types, hooks, helpers) close to where they're used
- Avoid prop drilling more than 2 levels — use context or query state instead

### TypeScript

- No new `any` types in code you write or modify — existing ones are acknowledged tech debt, type them incrementally when touched
- All new API response shapes must be explicitly typed
- The central `types/` folder is a long-term goal, not current enforcement — do not move existing co-located types; new shared types may go there

### Performance

- No unnecessary `useEffect` — question every one before writing it
- Memoize expensive computations with `useMemo`; stable callbacks with `useCallback`
- Avoid re-renders from object/array literals defined inline in JSX
- Lazy load heavy components (PDF renderer, charts) with `dynamic()` from Next.js

### Security Hygiene

- Avoid `dangerouslySetInnerHTML` — if unavoidable, sanitize with DOMPurify first
- Validate and sanitize all data from external sources before rendering or sending
- Keep dependencies updated; flag packages with known vulnerabilities

### Cleanup Patterns

- Centralize repeated logic into custom hooks (`hooks/`) or utility functions (`utils/`)
- If the same API call appears in more than one place, it belongs in a shared query hook
- Remove all `console.log` statements before marking any task complete

## Off-Limits (Do Not Touch)

- Chakra UI theme config and visual styles
- Existing API endpoint contracts (request/response shape stays the same)
- Payment processing logic and flows
- XRPL / blockchain integration code

## Verification

- Run `npm run build` after any structural change to catch type and import errors
- Run `npm run lint` before marking any task complete
- Test both logged-in and logged-out states after any auth-related change
- Test tab switching / focus loss after any auth or session-related change

## Error & Loading States

- Every page or component that makes an API call must have an explicit loading state — use the
  `<PageLoader />` component already used across the app, or a skeleton
- Every page or component that makes an API call must have an explicit error state — never leave
  the user on a blank page after a failure
- On error: show a persistent in-page error component (not just a toast) — something like an
  empty state with a message and a go-back or retry action
- Toasts are for transient feedback only (e.g., "Saved successfully") — they must never be the
  sole response to a critical failure
- Loading and error states are not optional — flag any page that has an API call and is missing either
- Currently missing error states on most pages — add as you migrate each one to TanStack Query
- When using TanStack Query, always destructure and handle `isLoading`, `isError`, and `error`
  explicitly — do not render UI until data state is known

## Reference Files

- For component patterns, refer to an existing page component before creating new ones
- For query patterns, establish one reference implementation first, then replicate
- Auth logic lives in `AuthContext.tsx` and `createAxiosinstances.ts` — read both before touching either
