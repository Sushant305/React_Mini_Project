import React from "react";

const ChessBoard = () => {
  const pieces = [
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
  ];

  return (
    <div>
      <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-[600px]">
          <div className="grid grid-cols-8 aspect-square">
            {pieces.map((row, rowIndex) =>
              row.map((pieces, colIndex) => {
                const isLight = (rowIndex + colIndex) % 2 === 0;

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`relative aspect-square flex  items-center justify-center text-4xl sm:text-5xl md:text-6xl select-none ${isLight ? "bg-[#f0d9b5]" : "bg-[#b58863]"} `}
                  >
                    {colIndex === 0 && (
                      <span
                        className={`absolute top-0.5 left-1 text-xs sm:text-sm font-semibold ${isLight ? "bg-[#f0d9b5]" : "bg-[#b58863]"}`}
                      >
                        {8 - rowIndex}
                      </span>
                    )}


                    {rowIndex === 7 && (
                      <span className={`absolute bottom-0 right-1 text-xs sm:text-sm font-semibold ${isLight ? "text-[#b58863]" : "text-[#f0d9b5]"}`}>
                        {String.fromCharCode(97 + colIndex)}
                      </span>
                    )}

                    <span className="leading-none"> {pieces} </span>
                  </div>
                );
              }),
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChessBoard;
