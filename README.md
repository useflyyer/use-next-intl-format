# use-next-intl-format

[Super lightweight](https://bundlephobia.com/result?p=use-next-intl-format) and zero-dependencies React Hook for creating memoized native instances of Intl for Next.js i18n

[![NPM](https://img.shields.io/npm/v/use-next-intl-format.svg)](https://www.npmjs.com/package/use-next-intl-format) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This module includes Typescript typings.

```bash
npm install --save use-next-intl-format

yarn add use-next-intl-format
```

## Supported Intl helpers

* [`DateTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) — via `useIntlDateTimeFormat`
* [`RelativeTimeFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat) — via `useIntlRelativeTimeFormat`
* [`NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) — via `useIntlNumberFormat`
* [`PluralRules`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules) — via `useIntlPluralRules`

## Usage

> See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat#using_options for `options` reference

> See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat#using_options for `options` reference

**This only applies for Next.js apps.**

```tsx
import * as React from 'react'

import { useIntlDateTimeFormat, useIntlNumberFormat } from 'use-next-intl-format'

const Example = () => {
  const dateFormatter = useIntlDateTimeFormat({
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const numberFormatter = useIntlNumberFormat({ notation: "compact" })

  return (
    <div>
      Current datetime: {dateFormatter.format(new Date())}
      Number: {numberFormatter.format(2)}
    </div>
  )
}
```

## Note

Do you need this library? Probably not, use it only if you need to have the same `formatter` per render for optimization reasons.

If that is not your case, fallback to:

```tsx
import { useRouter } from "next/router";

function Page() {
  const router = useRouter()
  const formatter = new Intl.DateTimeFormat(router.locale, { ... })
  // ...
}
```

## License

MIT © [lopezjurip](https://github.com/lopezjurip)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
