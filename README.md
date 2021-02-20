# use-next-intl-format

> React Hook for creating instance of the native Intl library using Next.js i18n

[![NPM](https://img.shields.io/npm/v/use-next-intl-format.svg)](https://www.npmjs.com/package/use-next-intl-format) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-next-intl-format
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-next-intl-format'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [lopezjurip](https://github.com/lopezjurip)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
