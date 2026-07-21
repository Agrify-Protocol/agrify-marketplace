// Escapes user text before it's mixed with markup we control (e.g. the
// <br/> tags injected for paragraph breaks), so a user can't smuggle real
// HTML/script tags into stored content. Pair with unescapeHtml for editing
// and display.
export const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export const unescapeHtml = (text: string) =>
  text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

const SAFE_URL_PROTOCOLS = ["http:", "https:", "mailto:"];

// Blocks javascript:/data:/vbscript: URIs from user-supplied links (e.g.
// "Additional Resources") so clicking them can't execute arbitrary script.
export const sanitizeUrl = (url: string | undefined | null) => {
  if (!url) return "";
  const base =
    typeof window !== "undefined" ? window.location.origin : "http://localhost";
  try {
    const parsed = new URL(url, base);
    return SAFE_URL_PROTOCOLS.includes(parsed.protocol) ? url : "";
  } catch {
    return "";
  }
};
