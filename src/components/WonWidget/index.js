import React from 'react';

const WonWidget = (props) => {
    return (
        <div className={"won-widget"}>
            <h1 className="you-won">You Won!</h1>
            <h2 className="step-title">Total steps: {props.score}</h2>
            <button onClick={props.handlePlayAgain}>Play Again</button>
        </div>
    )
};

export default WonWidget;