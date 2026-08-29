export const initialBoard = [
    [
        {type :"rock",color:"black"},
        {type :"knight",color:"black"},
        {type :"bishop",color:"black"},
        {type :"queen",color:"black"},
        {type :"king",color:"black"},
        {type :"dishop",color:"black"},
        {type :"knight",color:"black"},
        {type :"rock",color:"black"},
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
        {type :"rock",color:"white"},
        {type :"knight",color:"white"},
        {type :"bishop",color:"white"},
        {type :"queen",color:"white"},
        {type :"king",color:"white"},
        {type :"dishop",color:"white"},
        {type :"knight",color:"white"},
        {type :"rock",color:"white"},
    ],


];
