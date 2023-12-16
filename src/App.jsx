import './style.scss';
import { useState } from 'react';
import Board from './Components/Board';
import StatusMessage from './Components/StatusMessage';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <StatusMessage isXNext={isXNext} winner={winner} squares={squares} />
      <Board squares={squares} handleSquareClick={handleSquareClick} />
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
