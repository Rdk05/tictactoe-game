import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';

function App(){

  const [counter, setCounter] = useState(1)

  const onBtnClick = () => {
    setCounter(currentCounter => {
      return currentCounter + 1;
    });
   
  };

  return (
    <div className='app'>
      <div>
        <button onClick={onBtnClick}>Click me please</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;