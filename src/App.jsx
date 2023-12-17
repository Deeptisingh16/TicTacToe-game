import './style.scss';
import { useState } from 'react';
import Board from './Components/Board';
import StatusMessage from './Components/StatusMessage';
import { calculateWinner } from './winner';
import History from './Components/History';

const NEW_GAME = [{ squares: Array(9).fill(null), isXNext: false }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const winner = calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedPosition => {
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquaresState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;
      return base.concat({
        squares: nextSquaresState,
        isXNext: !lastGamingState.isXNext,
      });
    });
    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };
  const onNewGameStart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <StatusMessage gamingBoard={gamingBoard} winner={winner} />
      <Board
        squares={gamingBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <button
        type="button"
        onClick={onNewGameStart}
        className={`btn-reset ${winner ? 'active' : ''}`}
      >
        Start New Game
      </button>
      <h2>Current Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;

// import { useState } from 'react';
/* <h1>Title</h1>
      <img src="/vite.svg" alt="none" />
      <Square value="5">
        <div>skdjnfsejkvns</div>
        <h5>3gdv</h5>
      </Square>
      <Square value="5" />
      <Square value="5" />
      <Square value="5" /> */
// const [counter, setCounter] = useState(1);

// const onBtnClick = () => {
//   setCounter(currentCounter => {
//     return currentCounter + 1;
//   });
// };

/* <button onClick={onBtnClick}>Click me please</button> */
/* <div>{counter}</div> */

// setHistory(currentSquares => {
//   return currentSquares.map((squareValue, position) => {
//     if (clickedPosition === position) {
//       return isXNext ? 'X' : 'O';
//     }
//     return squareValue;
//   });
// });
// setIsXNext(currentIsXNext => !currentIsXNext);
