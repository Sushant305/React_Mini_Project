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

export const getKnightMoves = (board, row, col) => {
  const piece = board[row][col];

  if (!piece || piece.type !== "knight") {
    return [];
  }

  const moves = [];

  const getKnightMoves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  getKnightMoves.forEach(([rowOffset, colOffset]) => {
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
