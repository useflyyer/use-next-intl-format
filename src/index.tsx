import { useContext, useMemo, createContext } from "react";

import { useRouter } from "next/router";

const IntlDefaultLocaleContext = /*#__PURE__*/ createContext<string>("default");

/**
 * Safe date parse.
 */
export function useDate(value?: number | string | Date | null): Date | null {
  return useMemo(() => {
    // @ts-expect-error Type error
    const date =  new Date(value);
    // @ts-expect-error Type error
    return date instanceof Date && !isNaN(date) ? date : null
  }, ["" + value]);
}

function useNextJSLocale() {
  const router = useRouter();
  const defaultLocale = useContext(IntlDefaultLocaleContext);
  return router.locale || router.defaultLocale || defaultLocale;
}

/**
 * Create memoized Intl.DateTimeFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
export function useIntlDateTimeFormat(options?: Intl.DateTimeFormatOptions): Intl.DateTimeFormat {
  const locale = useNextJSLocale();
  return useMemo(() => new Intl.DateTimeFormat(locale, options), [options, locale]);
}

/**
 * Create memoized Intl.NumberFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 */
export function useIntlNumberFormat(options?: Intl.NumberFormatOptions): Intl.NumberFormat {
  const locale = useNextJSLocale();
  return useMemo(() => new Intl.NumberFormat(locale, options), [options, locale]);
}

/**
 * Create memoized Intl.RelativeTimeFormat instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat
 */
export function useIntlRelativeTimeFormat(options?: Intl.RelativeTimeFormatOptions): Intl.RelativeTimeFormat {
  const locale = useNextJSLocale();
  return useMemo(() => new Intl.RelativeTimeFormat(locale, options), [options, locale]);
}

/**
 * Create memoized Intl.PluralRules instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules
 */
export function useIntlPluralRules(options?: Intl.PluralRulesOptions): Intl.PluralRules {
  const locale = useNextJSLocale();
  return useMemo(() => new Intl.PluralRules(locale, options), [options, locale]);
}

/**
 * Create memoized Intl.PluralRules instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames
 */
export function useIntlDisplayNames(options: Intl.DisplayNamesOptions): Intl.DisplayNames {
  const locale = useNextJSLocale();
  return useMemo(() => new Intl.DisplayNames(locale, options), [options, locale]);
}

/**
 * Create memoized Intl.PluralRules instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/ListFormat
 */
export function useIntlListFormat(options?: Intl.ListFormatOptions): Intl.ListFormat {
  const locale = useNextJSLocale();
  return useMemo(() => new Intl.ListFormat(locale, options), [options, locale]);
}

/**
 * Create memoized Intl.PluralRules instance based on current locale
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/Segmenter
 */
export function useIntlSegmenter(options?: Intl.SegmenterOptions): Intl.Segmenter {
  const locale = useNextJSLocale();
  return useMemo(() => new Intl.Segmenter(locale, options), [options, locale]);
}
