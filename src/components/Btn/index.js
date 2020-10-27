import React, {memo} from 'react';

function Btn(props) {
    return (
        <div className={`btn ${props.className}`} style={{...props.style, backgroundColor: props.color}}
             onClick={props.onClick}/>
    )
}

export default memo(Btn);