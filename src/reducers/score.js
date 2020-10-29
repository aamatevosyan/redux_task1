import {INCREMENT_SCORE} from "../actions/types";

const score = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT_SCORE:
            return state + 1;
        default:
            return state;
    }
}

export default score;