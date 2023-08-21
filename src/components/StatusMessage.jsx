
const statusMessage = ({ winner, gamingBoard }) => {
    const { squares, isXNext} = gamingBoard
    
    
    const noMovesLeft = gamingBoard.squares.every(squareValue => squareValue !== null);
    const nextPlayer = gamingBoard.isXNext ? 'x' : '0';

    const renderStatusMessage = () => {
        if(winner) {
            return (
              <>
                 Winner is {' '} 
                <span className={ winner === 'X' ? "text-green" : "text-orange"}>
                  {winner}
                </span>
              </>
            );
        }

        if(!winner && noMovesLeft) {
            return (
             <>
              <span className="text-orange">0</span> and{' '}
              <span className="text-green">X</span> tied
              </>
            );
        }

        if(!winner && !noMovesLeft) {
            return (
              <>
                Next player is{' '}
                <span className={ isXNext ? "text-green" : "text-orange"}>
                  {nextPlayer}
                </span>
              </>
            );
        }

        return null;
    };

    
    return <h2 className="status-message">{renderStatusMessage()}</h2>;
};

export default statusMessage; 