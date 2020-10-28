import {SET_ORIGIN_COLORS} from "../actions/types";

const originColors = (state = [], action) => {
    switch (action.type) {
        case SET_ORIGIN_COLORS:
            return action.payload
        default:
            return state;
    }
}

export default originColors;