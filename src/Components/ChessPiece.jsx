import React from "react";

const pieces = {
  white: {
    king: "♔",
    queen: "♕",
    rook: "♖",
    bishop: "♗",
    knight: "♘",
    pawn: "♙",
  },
  black: {
    king: "♚",
    queen: "♛",
    rook: "♜",
    bishop: "♝",
    knight: "♞",
    pawn: "♟",
  },
};

const ChessPiece = ({piece}) => {

  if(!piece){
    return null
  }

  const {type, color} = piece

  return( 
  <span className="text-4xl md:text-5xl select-none">
    {pieces [color][type]}
  </span>);
};

export default ChessPiece;
