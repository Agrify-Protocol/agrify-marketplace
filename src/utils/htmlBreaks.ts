// Converts textarea newlines to <br/> tags for storage/transmission, and back
// to newlines for editing/display, so paragraph breaks survive the round trip
// without rendering literal tag text in the UI.
//
// The text is HTML-escaped first so a user can't smuggle real tags (e.g.
// <script>) into the string alongside the <br/> tags we add ourselves.

import { escapeHtml, unescapeHtml } from "./sanitize";

export const textToHtmlBreaks = (text: string) =>
  escapeHtml(text).replace(/\r\n|\r|\n/g, "<br/>");

export const htmlBreaksToText = (html: string) =>
  unescapeHtml(html.replace(/<br\s*\/?>/gi, "\n"));
