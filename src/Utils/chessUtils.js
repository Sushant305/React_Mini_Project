export const initialBoard = [
  [
    { type: "rook", color: "black" },
    { type: "knight", color: "black" },
    { type: "bishop", color: "black" },
    { type: "queen", color: "black" },
    { type: "king", color: "black" },
    { type: "bishop", color: "black" },
    { type: "knight", color: "black" },
    { type: "rook", color: "black" },
  ],

  Array.from({ length: 8 }, () => ({ type: "pawn", color: "black" })),

  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),
  Array(8).fill(null),

  Array.from({ length: 8 }, () => ({ type: "pawn", color: "white" })),

  [
    { type: "rook", color: "white" },
    { type: "knight", color: "white" },
    { type: "bishop", color: "white" },
    { type: "queen", color: "white" },
    { type: "king", color: "white" },
    { type: "bishop", color: "white" },
    { type: "knight", color: "white" },
    { type: "rook", color: "white" },
  ],
];

export const getPawnMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece || piece.type !== "pawn") {
    return [];
  }

  const direction = piece.color === "white" ? -1 : 1;
  const startingRow = piece.color === "white" ? 6 : 1;

  const moves = [];
  const oneStepRow = row + direction;

  if (board[oneStepRow] && board[oneStepRow][col] === null) {
    moves.push({
      row: oneStepRow,
      col,
    });
  }

  const twoStepRow = row + direction * 2;

  if (
    row === startingRow &&
    board[oneStepRow]?.[col] === null &&
    board[twoStepRow]?.[col] === null
  ) {
    moves.push({
      row: twoStepRow,
      col,
    });
  }

  const captureColumns = [col - 1, col + 1];

  captureColumns.forEach((capturecol) => {
    const targetPiece = board[oneStepRow]?.[capturecol];
    if (targetPiece && targetPiece.color !== piece.color) {
      moves.push({
        row: oneStepRow,
        col: capturecol,
      });
    }
  });
  return moves;
};

export const getPawnAttacks = (board, row, col) => {
  const piece = board[row][col];
  if (!piece || piece.type !== "pawn") {
    return [];
  }
  const direction = piece.color === "white" ? -1 : 1;
  const attackRow = row + direction;

  const attacks = [
    {
      row: attackRow,
      col: col - 1,
    },
    {
      row: attackRow,
      col: col + 1,
    },
  ];
  return attacks.filter(
    (move) => move.row >= 0 && move.row < 8 && move.col >= 0 && move.col < 8,
  );
};

export const getKnightMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece || piece.type !== "knight") {
    return [];
  }

  const moves = [];

  const knightMove = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  knightMove.forEach(([rowOffset, colOffset]) => {
    const newRow = row + rowOffset;
    const newCol = col + colOffset;

    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const targetPiece = board[newRow][newCol];

      if (!targetPiece || targetPiece.color !== piece.color) {
        moves.push({
          row: newRow,
          col: newCol,
        });
      }
    }
  });
  return moves;
};

export const getBishopMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece || piece.type !== "bishop") {
    return [];
  }

  const moves = [];

  const directions = [
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  directions.forEach(([rowDirection, colDirection]) => {
    let newRow = row + rowDirection;
    let newCol = col + colDirection;

    while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const targetPiece = board[newRow][newCol];

      if (!targetPiece) {
        moves.push({
          row: newRow,
          col: newCol,
        });
      } else {
        if (targetPiece.color !== piece.color) {
          moves.push({
            row: newRow,
            col: newCol,
          });
        }
        break;
      }
      newRow += rowDirection;
      newCol += colDirection;
    }
  });
  return moves;
};

export const getRookMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece || piece.type !== "rook") {
    return [];
  }

  const moves = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  directions.forEach(([rowDirection, colDirection]) => {
    let newRow = row + rowDirection;
    let newCol = col + colDirection;

    while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const targetPiece = board[newRow][newCol];

      if (!targetPiece) {
        moves.push({
          row: newRow,
          col: newCol,
        });
      } else {
        if (targetPiece.color !== piece.color) {
          moves.push({
            row: newRow,
            col: newCol,
          });
        }
        break;
      }
      newRow += rowDirection;
      newCol += colDirection;
    }
  });
  return moves;
};

export const getQueenMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece || piece.type !== "queen") {
    return [];
  }

  const moves = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  directions.forEach(([rowDirection, colDirection]) => {
    let newRow = row + rowDirection;
    let newCol = col + colDirection;

    while (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const targetPiece = board[newRow][newCol];

      if (!targetPiece) {
        moves.push({
          row: newRow,
          col: newCol,
        });
      } else {
        if (targetPiece.color !== piece.color) {
          moves.push({
            row: newRow,
            col: newCol,
          });
        }
        break;
      }
      newRow += rowDirection;
      newCol += colDirection;
    }
  });
  return moves;
};

export const getKingMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece || piece.type !== "king") {
    return [];
  }

  const moves = [];

  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [1, 1],
  ];

  directions.forEach(([rowDirection, colDirection]) => {
    let newRow = row + rowDirection;
    let newCol = col + colDirection;

    if (newRow >= 0 && newRow < 8 && newCol >= 0 && newCol < 8) {
      const targetPiece = board[newRow][newCol];
      if (!targetPiece || targetPiece.color !== piece.color) {
        moves.push({
          row: newRow,
          col: newCol,
        });
      }
    }
  });
  return moves;
};

export const isKingInCheck = (board, color) => {
  let kingsPosition = null;
  board.forEach((row, rowIndex) => {
    row.forEach((piece, colIndex) => {
      if (piece && piece.type === "king" && piece.color === color) {
        kingsPosition = {
          row: rowIndex,
          col: colIndex,
        };
      }
    });
  });

  if (!kingsPosition) {
    return false;
  }

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];

      if (!piece) {
        continue;
      }

      if (piece.color === color) {
        continue;
      }

      let moves = [];
      if (piece.type === "pawn") {
        moves = getPawnAttacks(board, row, col);
      }
      if (piece.type === "knight") {
        moves = getKnightMoves(board, row, col);
      }
      if (piece.type === "bishop") {
        moves = getBishopMoves(board, row, col);
      }
      if (piece.type === "rook") {
        moves = getRookMoves(board, row, col);
      }
      if (piece.type === "queen") {
        moves = getQueenMoves(board, row, col);
      }
      if (piece.type === "king") {
        moves = getKingMoves(board, row, col);
      }

      const attackKing = moves.some(
        (move) =>
          move.row === kingsPosition.row && move.col === kingsPosition.col,
      );

      if (attackKing) {
        return true;
      }
    }
  }

  return false;
};

export const getLegalMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece) {
    return [];
  }

  let moves = [];
  if (piece.type === "pawn") {
    moves = getPawnMoves(board, row, col);
  }
  if (piece.type === "knight") {
    moves = getKnightMoves(board, row, col);
  }
  if (piece.type === "bishop") {
    moves = getBishopMoves(board, row, col);
  }
  if (piece.type === "rook") {
    moves = getRookMoves(board, row, col);
  }
  if (piece.type === "queen") {
    moves = getQueenMoves(board, row, col);
  }
  if (piece.type === "king") {
    moves = getKingMoves(board, row, col);
  }

  return moves.filter((move) => {
    const newBoard = board.map((currentRow) => [...currentRow]);
    newBoard[move.row][move.col] = newBoard[row][col];

    newBoard[row][col] = null;
    return !isKingInCheck(newBoard, piece.color);
  });
};
