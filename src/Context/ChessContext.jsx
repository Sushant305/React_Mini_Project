import React, { createContext, useContext, useState } from "react";
import {
  initialBoard,
  isKingInCheck,
  getLegalMoves,
} from "../Utils/chessUtils";

const ChessContext = createContext();

export const ChessProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);

  const selectSquare = (row, col) => {
    const piece = board[row][col];

    if (selectedSquare) {
      const isValidMove = validMoves.some(
        (move) => move.row === row && move.col === col,
      );
      if (isValidMove) {
        const newBoard = board.map((currentRow) => [...currentRow]);
        newBoard[row][col] = newBoard[selectedSquare.row][selectedSquare.col];
        newBoard[selectedSquare.row][selectedSquare.col] = null;

        setBoard(newBoard);

        setSelectedSquare(null);
        setValidMoves([]);

        setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
        return;
      }
    }

    if (!piece) {
      return;
    }
    if (piece.color !== currentPlayer) {
      return;
    }
    setSelectedSquare({ row, col });
    const moves = getLegalMoves(board, row, col);
    setValidMoves(moves);
  };

  return (
    <ChessContext.Provider
      value={{
        board,
        setBoard,
        currentPlayer,
        setCurrentPlayer,
        selectedSquare,
        selectSquare,
        validMoves,
        isKingInCheck,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export const useChess = () => useContext(ChessContext);
