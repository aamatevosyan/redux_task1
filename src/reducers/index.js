import { combineReducers } from 'redux'
import finished from './finished'
import score from "./score";
import selectedColor from "./selectedColor";
import originColors from "./originColors";

export default combineReducers({
    finished,
    score,
    selectedColor,
    originColors
});