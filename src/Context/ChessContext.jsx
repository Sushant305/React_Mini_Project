import React, { createContext, useContext, useState } from "react";
import {initialBoard , getPawnMoves} from "../Utils/chessUtils"

const ChessContext = createContext();

export const ChessProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([])

  const selectSquare = (row, col) => {
    const piece = board[row][col]

    if(!piece){
      return;
    }
    if(piece.color !== currentPlayer){
      return;
    }
    setSelectedSquare({row,col})
    if(piece.type === "pawn"){
      const moves = getPawnMoves(board,row,col)
      setValidMoves(moves)
    }
  };

  return(
    <ChessContext.Provider value={{board,setBoard,currentPlayer,setCurrentPlayer,selectedSquare,selectSquare,validMoves}}>
        {children}
    </ChessContext.Provider>
  )
};

export const useChess = () => useContext(ChessContext)
