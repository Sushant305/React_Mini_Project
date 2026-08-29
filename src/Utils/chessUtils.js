export const initialBoard = [
    [
        {type :"rook",color:"black"},
        {type :"knight",color:"black"},
        {type :"bishop",color:"black"},
        {type :"queen",color:"black"},
        {type :"king",color:"black"},
        {type :"bishop",color:"black"},
        {type :"knight",color:"black"},
        {type :"rook",color:"black"},
    ],


    Array.from
    (
        {length:8},
        ()=>({type:"pawn",color:"black"})
    ),

    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),

    Array.from
    (
        {length:8},
        ()=>({type:"pawn",color:"white"})
    ),

    [
        {type :"rook",color:"white"},
        {type :"knight",color:"white"},
        {type :"bishop",color:"white"},
        {type :"queen",color:"white"},
        {type :"king",color:"white"},
        {type :"bishop",color:"white"},
        {type :"knight",color:"white"},
        {type :"rook",color:"white"},
    ],


];

export const getPawnMoves = (board,row,col)=>{
    const piece = board[row][col]

    if(!piece || piece.type !== "pawn"){
        return []
    }

    const direction = piece.color === "white" ? -1 : 1
    const startingRow = piece.color === "white" ? 6 : 1

    const moves = []    
    const oneStepRow = row+ direction

    if(board[oneStepRow] && board[oneStepRow][col]=== null){
        moves.push({
            row:oneStepRow,col,
        })
    }

    const twoStepRow = row + direction *2

    if(row === startingRow && board[oneStepRow]?.[col]=== null && board[twoStepRow]?.[col]=== null){
        moves.push({
            row:twoStepRow,col,
        })
    }

    const captureColumns = [col-1,col+1]

    captureColumns.forEach((capturecol)=>{
        const targetPiece = board[oneStepRow]?.[capturecol]
        if(targetPiece  && targetPiece.color !== piece.color){
            moves.push({
                row:oneStepRow,
                col:capturecol,
            })
        }
    })
    return moves
}