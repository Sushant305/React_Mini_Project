import React, { createContext, useContext, useState } from "react";
import {
  initialBoard,
  isKingInCheck,
  getLegalMoves,
  hasAnyLegalMoves,
} from "../Utils/chessUtils";

const ChessContext = createContext();

export const ChessProvider = ({ children }) => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("white");
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [gameStatus, setGameStatus] = useState(null);

  const selectSquare = (row, col) => {
    if (gameStatus) {
      return;
    }
    const piece = board[row][col];

    if (selectedSquare) {
      const isValidMove = validMoves.some(
        (move) => move.row === row && move.col === col,
      );
      if (isValidMove) {
        const newBoard = board.map((currentRow) => [...currentRow]);
        newBoard[row][col] = newBoard[selectedSquare.row][selectedSquare.col];
        newBoard[selectedSquare.row][selectedSquare.col] = null;

        const nextPlayer = currentPlayer === "white" ? "black" : "white";

        if (
          isKingInCheck(newBoard, nextPlayer) &&
          !hasAnyLegalMoves(newBoard, nextPlayer)
        ) {
          setBoard(newBoard)
          setSelectedSquare(null);
          setValidMoves([]);
          setGameStatus(`CheckMate! ${currentPlayer} WINS `);
          return;
        }
        setBoard(newBoard);
        setSelectedSquare(null);
        setValidMoves([]);
        setCurrentPlayer(nextPlayer);
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
        gameStatus,
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export const useChess = () => useContext(ChessContext);
