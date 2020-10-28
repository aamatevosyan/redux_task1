import {SET_FINISHED} from "../actions/types";

const finished = (state = false, action) => {
    switch (action.type) {
        case SET_FINISHED:
            return action.payload
        default:
            return state;
    }
}

export default finished;