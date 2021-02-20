# use-next-intl-format

> React Hook for creating memoized native instances of Intl for Next.js i18n

[![NPM](https://img.shields.io/npm/v/use-next-intl-format.svg)](https://www.npmjs.com/package/use-next-intl-format) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

This module includes Typescript typings.

```bash
npm install --save use-next-intl-format

yarn add use-next-intl-format
```

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

## License

MIT © [lopezjurip](https://github.com/lopezjurip)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
