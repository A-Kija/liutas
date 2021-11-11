import { ADD_ONE, REM_ONE_ONE } from "../Constants/types";

export default function countReducer(state, action) {
    // console.log('labas', action);
    let newState;
    switch (action.type) {
        case ADD_ONE:
            newState = state + 1;
            break;
        case REM_ONE_ONE:
            newState = state - 11;
            break;
        default:
            newState = state;
    }
    return newState;
}