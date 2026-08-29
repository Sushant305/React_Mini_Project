import React, { createContext, useContext, useState } from "react";
import {initialBoard} from "../Utils/chessUtils"

const ChessContext = createContext();

export const ChessProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [selectedSquare, setSelectedSquare] = useState(null);

  const selectSquare = (row, col) => {
    setSelectedSquare({ row, col });
  };

  return(
    <ChessContext.Provider value={{board,setBoard,currentPlayer,setCurrentPlayer,selectedSquare,selectSquare}}>
        {children}
    </ChessContext.Provider>
  )
};

export const useChess = () => useContext(ChessContext)
