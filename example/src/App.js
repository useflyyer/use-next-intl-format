import React from 'react'

import { useMyHook } from 'use-next-intl-format'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
