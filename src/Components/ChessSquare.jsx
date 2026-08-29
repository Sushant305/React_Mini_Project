import React from "react";
import ChessPiece from "./ChessPiece";
import { useChess } from "../Context/ChessContext";

const ChessSquare = ({ piece, row, col }) => {
  const { selectedSquare, selectSquare } = useChess();

  const isLight = (row + col) % 2 === 0;

  const isSelected =
  selectedSquare?.row === row &&
  selectedSquare?.col === col;

  const handleClick = () => {
    selectSquare(row, col);
  };

  return (
    <div
      onClick={handleClick}
      className={`
                aspect-square 
                flex
                items-center
                justify-center
                cursor-pointer
                ${isLight ? "bg-[#f0d9b5]" : "bg-[#b58863]"}
                ${isSelected ? "ring-4 ring-yellow-400 ring-inset" : ""}
            `}
    >
      <ChessPiece piece={piece} />
    </div>
  );
};

export default ChessSquare;
