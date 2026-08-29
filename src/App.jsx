import React from 'react'
import ChessBoard from './Components/ChessBoard'
import { ChessProvider } from './Context/ChessContext'

const App = () => {
  return (
    <ChessProvider>
      <main className='min-h-screen bg-slate-900 flex items-center justify-center  p-4'>
        <ChessBoard/>
      </main>
    </ChessProvider>
  )
}

export default App
