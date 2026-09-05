  import React from "react";
  import ChessBoard from "./Components/ChessBoard";
  import { ChessProvider ,  useChess} from "./Context/ChessContext";


  const ChessGame = () => {
    const { gameStatus , checkStatus } = useChess();
    return (
      <>
        <div>
          {gameStatus && (
            <h2 className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-2xl font-bold p-4">
              {gameStatus}
            </h2>
          )}


          {checkStatus && (
            <h2 className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-2xl font-bold p-4">
              {checkStatus}
            </h2>
          )}
        </div>
        <main className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
          <ChessBoard />
        </main>
      </>
    );
  };

  const App = () => {
    return (
      <ChessProvider>
        <ChessGame />
      </ChessProvider>
    );
  };

  export default App;
