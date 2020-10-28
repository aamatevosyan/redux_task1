import {SET_SCORE} from "../actions/types";

const score = (state = 0, action) => {
    switch (action.type) {
        case SET_SCORE:
            return action.payload
        default:
            return state;
    }
}

export default score;