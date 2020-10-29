import React, {useEffect, useRef} from 'react';
import Btn from "../Btn";
import {copyArray, generateRenderData, usePrevious} from "../../helpers";
import BtnWidget from "../BtnWidget";
import {connect} from "react-redux";
import {setOriginColors, setSelectedColor, incrementScore} from "../../actions";
import {bloopAudio} from "../../helpers/index";

const BtnContainer = ({selectedColor, setSelectedColor, originColors, setOriginColors, score, incrementScore, setFinished}) => {

    const prevSelectedColor = usePrevious(selectedColor);
    const prevOriginColors = usePrevious(originColors);

    const MAX_COUNT = useRef();
    const mounted = useRef(false);

    useEffect(() => {
        if (!mounted.current) {
            // do componentDidMount logic
            async function fetchData() {
                const response = await fetch('data.json');
                const data = await response.json();

                MAX_COUNT.current = data.maxCount;
                setOriginColors(data.colors);

                mounted.current = true;
            }

            fetchData();
        } else {
            // do componentDidUpdate logic

            if (prevSelectedColor !== selectedColor) {
                let status = true;

                originColors.forEach((colors) => {
                    if (colors.length) {
                        if (colors.length === MAX_COUNT.current) {
                            const uniqueObj = new Set();
                            colors.forEach((color) => uniqueObj.add(color));
                            if (uniqueObj.size !== 1) status = false;
                            return;
                        }
                        status = false;
                    }
                })

                if (status) {
                    setFinished();
                }
            }
        }
    });

    const handleClick = (index) => {
        const colors = copyArray(originColors);
        const clickedColorsArray = colors[index];
        const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

        if (!selectedColor) {
            clickedColorsArray.pop();
            bloopAudio.play();
            setSelectedColor(clickedColor);
            setOriginColors(colors);
            incrementScore();
            return;
        }

        if (clickedColorsArray.length < MAX_COUNT.current && (!clickedColor || selectedColor === clickedColor)) {
            clickedColorsArray.push(selectedColor);
            bloopAudio.play();
            setSelectedColor('');
            setOriginColors(colors);
        }
    }

    const handleUndo = () => {
        if (score !== 0) {
            bloopAudio.play();
            setOriginColors(prevOriginColors);
            setSelectedColor(prevSelectedColor);
            incrementScore();
        }
    };

    // render

    const colors = generateRenderData(originColors, MAX_COUNT.current);

    return (
        <>
            <BtnWidget color={selectedColor} onClick={() => handleUndo()} className="btn-selected" score={score}/>

            <div className="game-container">
                {colors.map((colors, i) => (
                    <div key={i} className="btn-container" onClick={() => handleClick(i)}>
                        {colors.map((color, j) => (
                            <Btn key={j} color={color}/>
                        ))}
                    </div>
                ))}
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        selectedColor: state.selectedColor,
        originColors: state.originColors,
        score: state.score
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedColor: (value) => dispatch(setSelectedColor(value)),
        setOriginColors: (value) => dispatch(setOriginColors(value)),
        incrementScore: () => dispatch(incrementScore())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnContainer);