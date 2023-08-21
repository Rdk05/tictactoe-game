import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './winner';

function App(){
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), isXNext: false},
  ]);
    const [currentMove, setcurrentMove] = useState(0);

    const gamingBoard = history[currentMove];

    const winner = calculateWinner(gamingBoard.squares);

    console.log({ historyLength: history.length, currentMove });
    
    const handleSquareClick = clickedPosition => {

      if(gamingBoard.squares[clickedPosition] || winner){
          return;
      }
      
      setHistory(currentHistory => {
        const isTraversing = currentMove + 1 !== currentHistory.length;

        const lastGamingState = isTraversing ? currentHistory[currentMove] : currentHistory[currentHistory.length - 1];
          const nextSquaresState = lastGamingState.squares.map((squareValue, position) => {

              if(clickedPosition === position) {
                  return lastGamingState.isXNext ? 'X': 'O';
              }
              return squareValue;

          });


          const base = isTraversing ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1) : currentHistory;

          return base.concat({ 
            squares: nextSquaresState,
            isXNext: !lastGamingState.isXNext,})
      });

      setcurrentMove(move => move + 1);
     
    };

    const moveTo = (move) => {
      setcurrentMove(move)
    };

  return (
    <div className='app'>
      
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board squares={gamingBoard.squares} handleSquareClick={handleSquareClick} />

      <h2>Current game history</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
}

export default App;