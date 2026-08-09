export const locales = ["en", "de"] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = "en";

export function isLang(value: string): value is Lang {
  return (locales as readonly string[]).includes(value);
}

/** Locale of the current URL. English is unprefixed (`/`), German is `/de/...`. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybe] = url.pathname.split("/");
  return isLang(maybe) ? maybe : defaultLang;
}

/**
 * Prefix a path for the given locale.
 * `localizePath("en", "/projects/foo")` → `/projects/foo`
 * `localizePath("de", "/projects/foo")` → `/de/projects/foo`
 * Hashes are preserved: `localizePath("de", "/#projects")` → `/de#projects`
 */
export function localizePath(lang: Lang, path = "/"): string {
  const hashIndex = path.indexOf("#");
  const pathname = hashIndex === -1 ? path : path.slice(0, hashIndex);
  const hash = hashIndex === -1 ? "" : path.slice(hashIndex);
  const clean = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalized = clean === "" ? "/" : clean;

  if (lang === defaultLang) return `${normalized}${hash}`;
  if (normalized === "/") return `/${lang}${hash}`;
  return `/${lang}${normalized}${hash}`;
}

/** Swap the locale of a path while keeping the rest of the pathname. */
export function switchLocalePath(currentPath: string, next: Lang): string {
  const segments = currentPath.split("/").filter(Boolean);
  if (segments[0] && isLang(segments[0])) segments.shift();
  const rest = segments.length ? `/${segments.join("/")}` : "/";
  return localizePath(next, rest);
}
