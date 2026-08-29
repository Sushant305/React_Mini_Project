import React from 'react'
import { useChess } from '../Context/ChessContext'
import ChessSquare from './ChessSquare'

const ChessBoard = () => {

  const {board} = useChess()

  return (
    <div className='grid grid-cols-8 w-[min(90vw,640px)] aspect-square shadow-2xl'>
      {board.map((row,rowIndex)=>(
        row.map((piece,colIndex)=>(
          <ChessSquare 
          key={`${rowIndex}-${colIndex}`}
          piece={piece}
          row={rowIndex}
          col={colIndex}
          />
          
        ))
      ))

      }

    </div>
  )
}

export default ChessBoard
