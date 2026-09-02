import React, {
  createContext,
  useContext,
  useState,
} from "react";
import {
  initialBoard,
  getPawnMoves,
  getKnightMoves,
  getBishopMoves,
  getRookMoves,
  getQueenMoves,
  getKingMoves
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
    if (piece.type === "pawn") {
      const moves = getPawnMoves(board, row, col);
      setValidMoves(moves);
    }
    if (piece.type === "knight") {
      const moves = getKnightMoves(board, row, col);
      setValidMoves(moves);
    }
    if (piece.type === "bishop") {
      const moves = getBishopMoves(board, row, col);
      setValidMoves(moves);
    }
    if (piece.type === "rook") {
      const moves = getRookMoves(board, row, col);
      setValidMoves(moves);
    }
    if (piece.type === "queen") {
      const moves = getQueenMoves(board, row, col);
      setValidMoves(moves);
    }
    if (piece.type === "king") {
      const moves = getKingMoves(board, row, col);
      setValidMoves(moves);
    }
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
      }}
    >
      {children}
    </ChessContext.Provider>
  );
};

export const useChess = () => useContext(ChessContext);
