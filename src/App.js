import React from 'react';
import './App.css';
import BtnContainer from "./components/BtnContainer";
import WonWidget from "./components/WonWidget";
import {connect} from "react-redux";
import {setFinished} from "./actions";

const App = ({finished, setFinished, score}) => {
    return (
        <div className="App">
            {finished ? (
                <WonWidget handlePlayAgain={() => setFinished(false)} score={score}/>
            ) : (
                <BtnContainer setFinished={() => setFinished(true)}/>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        finished: state.finished,
        score: state.score
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setFinished: (value) => dispatch(setFinished(value))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
