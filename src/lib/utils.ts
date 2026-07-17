/**
 * Small helper for conditionally joining class names.
 * This keeps JSX cleaner when classes depend on optional values.
 */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}
