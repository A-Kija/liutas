import { ADD_DOMINO, ADD_LEFT, ADD_RIGHT, DEL_DOMINO, GET_DOMINOS, HIDE_MESSAGE, RESET_LEFT_RIGHT, SHOW_MESSAGE, UPDATE_DOMINO } from "../Constants/dominoTypes";

export function addLeft(payload) {
    return {
        type: ADD_LEFT,
        payload: payload
    }
}

export function addRight(payload) {
    return {
        type: ADD_RIGHT,
        payload: payload
    }
}

export function resetLeftRight() {
    return {
        type: RESET_LEFT_RIGHT
    }
}

export function getDominos(from = []) {
    return {
        type: GET_DOMINOS,
        payload: from
    }
}

export function addDomino(domino) {
    return {
        type: ADD_DOMINO,
        payload: domino
    }
}

export function showMessage(text) {
    return {
        type: SHOW_MESSAGE,
        payload: text
    }
}

export function hideMessage() {
    return {
        type: HIDE_MESSAGE
    }
}

export function delDomino(id) {
    return {
        type: DEL_DOMINO,
        payload: id
    }
}

export function updateDomino(id, domino) {
    return {
        type: UPDATE_DOMINO,
        payload: {
            id: id,
            left: domino.left,
            right: domino.right
        }
    }
}