import { useMemo, useRef } from "react";
import { dequal } from 'dequal/lite';

import { useRouter } from "next/router";

/**
 * Internal function, can be optimized and improved but works for most of cases related to Intl.
 */
function useMemoObject<T, O = Record<string,any>>(factory: () => T, obj?: O, deps?: DependencyList): T {
  let dependencies: DependencyList = deps || [];
  if (obj) {
    const depsObj = Object.values(obj);
    dependencies = [depsObj.length].concat(depsObj, deps as any); // concat flattens arrays
}

/**
 * Internal hook to help object compare.
 */
function usePrevious<T>(value?: T) {
  const prev = useRef<T>();
  if (!prev.current || !dequal(prev.current, value)) {
    prev.current = value;
  }
  return prev.current
}

/**
 * Create memoized Intl.DateTimeFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export function useIntlDateTimeFormat(options?: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
  const router = useRouter();
  const locale = router.locale || "default";
  const opts = usePrevious(options);
  return useMemo(() => new Intl.DateTimeFormat(locale, options), [opts, locale]);
}

/**
 * Create memoized Intl.NumberFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export function useIntlNumberFormat(options?: Intl.NumberFormatOptions): Intl.NumberFormat {
  const router = useRouter();
  const locale = router.locale || "default";
  const opts = usePrevious(options);
  return useMemo(() => new Intl.NumberFormat(locale, options), [opts, locale]);
}

/**
 * Create memoized Intl.RelativeTimeFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
 */
export function useIntlRelativeTimeFormat(options?: Intl.RelativeTimeFormatOptions): Intl.RelativeTimeFormat {
  const router = useRouter();
  const locale = router.locale || "default";
  const opts = usePrevious(options);
  return useMemo(() => new Intl.RelativeTimeFormat(locale, options), [opts, locale]);
}

/**
 * Create memoized Intl.PluralRules instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
 */
export function useIntlPluralRules(options?: Intl.PluralRulesOptions): Intl.PluralRules {
  const router = useRouter();
  const locale = router.locale || "default";
  const opts = usePrevious(options);
  return useMemo(() => new Intl.PluralRules(locale, options), [opts, locale]);
}
