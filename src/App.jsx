import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import ChessBoard from './Components/ChessBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ChessBoard/>
    </>
  )
}

export default App
