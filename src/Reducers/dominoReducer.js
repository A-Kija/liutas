import { ADD_DOMINO, ADD_LEFT, ADD_RIGHT, GET_DOMINOS } from "../Constants/dominoTypes";
import idGenerator from "../Common/idGenerator";

export function dominosReducer(state, action) {
    let newState = [...state];
    switch (action.type) {
        case GET_DOMINOS:
            const dominos = localStorage.getItem('dominos');
            if (null === dominos) {
                newState = [];
            } else {
                newState = JSON.parse(dominos);
            }
            break;
        case ADD_DOMINO:
            action.payload.id = idGenerator('dominoId');
            newState.push(action.payload);
            localStorage.setItem('dominos', JSON.stringify(newState));
            break;
        default:
            newState = state;

    }
    return newState

}

export function dominoPlateReducer(state, action) {
    const newState = {...state };
    let number = parseInt(action.payload);
    switch (action.type) {
        case ADD_LEFT:
            if (isNaN(number)) {
                number = 0;
            } else if (number > 6) {
                number = 6;
            } else if (number < 0) {
                number = 0;
            }
            if (number == action.payload) {
                newState.leftErr = false;
            } else {
                newState.leftErr = true;
            }
            newState.left = number;
            break;
        case ADD_RIGHT:
            if (isNaN(number)) {
                number = 0;
            } else if (number > 6) {
                number = 6;
            } else if (number < 0) {
                number = 0;
            }
            if (number == action.payload) {
                newState.rightErr = false;
            } else {
                newState.rightErr = true;
            }
            newState.right = number;
            break;
        default:
    }
    return newState;
}