import {SET_FINISHED, SET_ORIGIN_COLORS, SET_SCORE, SET_SELECTED_COLOR} from "./types";

export const setFinished = (finished) => {
    return {
        type: SET_FINISHED,
        payload: finished
    }
};

export const setScore = (score) => {
    return {
        type: SET_SCORE,
        payload: score
    }
};

export const setSelectedColor = (selectedColor) => {
    return {
        type: SET_SELECTED_COLOR,
        payload: selectedColor
    }
};

export const setOriginColors = (originColors) => {
    return {
        type: SET_ORIGIN_COLORS,
        payload: originColors
    }
};