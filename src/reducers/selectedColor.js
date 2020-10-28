import {SET_SELECTED_COLOR} from "../actions/types";

const selectedColor = (state = '', action) => {
    switch (action.type) {
        case SET_SELECTED_COLOR:
            return action.payload
        default:
            return state;
    }
}

export default selectedColor;