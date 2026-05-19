/** Resolve a file from /public with correct URL encoding for spaces and special chars. */
export function publicAsset(filename) {
  return `/${encodeURI(filename)}`
}
