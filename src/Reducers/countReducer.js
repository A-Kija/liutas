import { ADD_ONE, DO_MULTIPLY, REM_ONE_ONE } from "../Constants/types";

export default function countReducer(state, action) {
    let newState;
    switch (action.type) {
        case ADD_ONE:
            newState = state + 1;
            break;
        case REM_ONE_ONE:
            newState = state - 11;
            break;
        case DO_MULTIPLY:
            newState = state * action.payload;
            break;
        default:
            newState = state;
    }
    return newState;
}