import React, {useRef, useState} from 'react';
import './App.css';
import BtnContainer from "./components/BtnContainer";
import WonWidget from "./components/WonWidget";

const App = (props) => {
    const [finished, setFinished] = useState(false);
    const score = useRef(0);

    const handlePlayAgain = () => {
        setFinished(false);
    }

    const handleSetFinished = () => {
        setFinished(true);
    }

    return (
        <div className="App">
            {finished ? (
                <WonWidget handlePlayAgain={handlePlayAgain} score={score.current}/>
            ) : (
                <BtnContainer setFinished={handleSetFinished} score={score}/>
            )}
        </div>
    )
}

export default App;
