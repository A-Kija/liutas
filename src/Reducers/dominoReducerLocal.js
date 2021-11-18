import { ADD_DOMINO, ADD_LEFT, ADD_RIGHT, DEL_DOMINO, GET_DOMINOS, HIDE_MESSAGE, RESET_LEFT_RIGHT, SHOW_MESSAGE, UPDATE_DOMINO } from "../Constants/dominoTypes";
import idGenerator from "../Common/idGenerator";

export function messageReducer(state, action) {
    let newState = {...state };
    switch (action.type) {
        case SHOW_MESSAGE:
            newState.text = action.payload;
            newState.show = true;
            break;
        case HIDE_MESSAGE:
            newState.show = false;
            break;
        default:
            newState = state;
    }
    return newState;
}

export function dominosReducer(state, action) {
    let newState = [...state];
    let i;
    switch (action.type) {
        case DEL_DOMINO:
            i = newState.findIndex(domino => domino.id === action.payload);
            newState.splice(i, 1);
            localStorage.setItem('dominos', JSON.stringify(newState));
            break;
        case UPDATE_DOMINO:
            console.log(action)
            i = newState.findIndex(domino => domino.id === action.payload.id);
            newState[i].left = parseInt(action.payload.left);
            newState[i].right = parseInt(action.payload.right);
            localStorage.setItem('dominos', JSON.stringify(newState));
            break;
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

export const startPos = {
    left: 0,
    leftErr: false,
    right: 0,
    rightErr: false
};

export function dominoPlateReducer(state, action) {
    let newState = {...state };
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
        case RESET_LEFT_RIGHT:
            newState = startPos;
            break;
        default:
    }
    return newState;
}