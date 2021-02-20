import { DependencyList, useMemo } from "react";

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
  return useMemo(factory, dependencies);
}

/**
 * Create memoized Intl.DateTimeFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export function useIntlDateTimeFormat(options?: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
  const router = useRouter();
  const locale = router.locale || "default";
  return useMemoObject(() => new Intl.DateTimeFormat(locale, options), options, [locale]);
}

/**
 * Create memoized Intl.NumberFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export function useIntlNumberFormat(options?: Intl.NumberFormatOptions): Intl.NumberFormat {
  const router = useRouter();
  const locale = router.locale || "default";
  return useMemoObject(() => new Intl.NumberFormat(locale, options), options, [locale]);
}

/**
 * Create memoized Intl.RelativeTimeFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
 */
export function useIntlRelativeTimeFormat(options?: Intl.RelativeTimeFormatOptions): Intl.RelativeTimeFormat {
  const router = useRouter();
  const locale = router.locale || "default";
  return useMemoObject(() => new Intl.RelativeTimeFormat(locale, options), options, [locale]);
}

/**
 * Create memoized Intl.PluralRules instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
 */
export function useIntlPluralRules(options?: Intl.PluralRulesOptions): Intl.PluralRules {
  const router = useRouter();
  const locale = router.locale || "default";
  return useMemoObject(() => new Intl.PluralRules(locale, options), options, [locale]);
}
