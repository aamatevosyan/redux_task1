import React, {useState} from 'react';
import './App.css';
import BtnContainer from "./components/BtnContainer";
import WonWidget from "./components/WonWidget";

const App = (props) => {
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handlePlayAgain = () => {
    setFinished(false);
  }

  const handleSetFinished = () => {
    setFinished(true);
  }

  return (
      <div className="App">
        {finished ? (
            <WonWidget handlePlayAgain={handlePlayAgain} score={score}/>
        ) : (
            <BtnContainer setFinished={handleSetFinished} setScore={setScore}/>
        )}
      </div>
  )
}

export default App;
