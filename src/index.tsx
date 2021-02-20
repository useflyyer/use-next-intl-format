import { useMemo } from "react";

import { useRouter } from "next/router";

/**
 * Create memoized Intl.DateTimeFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export function useIntlDateTimeFormat(options: Intl.DateTimeFormatOptions = {}): Intl.DateTimeFormat {
  const router = useRouter();

  const deps = Object.values(options); // they are all primitives
  const formatter = useMemo(() => {
    return new Intl.DateTimeFormat(router.locale || "default", options);
  }, [router.locale, deps, deps.length]);

  return formatter;
}

/**
 * Create memoized Intl.NumberFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export function useIntlNumberFormat(options: Intl.NumberFormatOptions = {}): Intl.NumberFormat {
  const router = useRouter();

  const deps = Object.values(options); // they are all primitives
  const formatter = useMemo(() => {
    return new Intl.NumberFormat(router.locale || "default", options);
  }, [router.locale, deps, deps.length]);

  return formatter;
}
