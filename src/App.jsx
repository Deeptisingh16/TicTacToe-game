import './style.scss';
import Board from './Components/Board';
import { useState } from 'react';
function App() {
  const [counter, setCounter] = useState(1);
  console.log('hello');

  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
  };

  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>Click me please</button>
        <div>{counter}</div>
      </div>
      <Board />
    </div>
  );
}

export default App;

/* <h1>Title</h1>
      <img src="/vite.svg" alt="none" />
      <Square value="5">
        <div>skdjnfsejkvns</div>
        <h5>3gdv</h5>
      </Square>
      <Square value="5" />
      <Square value="5" />
      <Square value="5" /> */
