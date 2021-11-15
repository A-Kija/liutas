import { ADD_LEFT, ADD_RIGHT } from "../Constants/dominoTypes";

export function dominoPlateReducer(state, action) {
    const newState = {...state };
    switch (action.type) {
        case ADD_LEFT:
            newState.left = action.payload;
            break;
        case ADD_RIGHT:
            newState.right = action.payload;
            break;
        default:
    }
    return newState;
}