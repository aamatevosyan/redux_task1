import Btn from "../Btn";
import React from 'react';

const BtnWidget = (props) => {
    return (
        <div className={"btn-widget"}>
            <h2 className="step-title">Step: {props.score} </h2>
            <Btn color={props.color} className={props.className} onClick={props.onClick}/>
            <p>You can click to the square above to undo the last current color selection.</p>
        </div>
    )
};

export default BtnWidget;