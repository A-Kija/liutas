import { ADD_DOMINO, ADD_LEFT, ADD_RIGHT, GET_DOMINOS } from "../Constants/dominoTypes";

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

export function getDominos() {
    return {
        type: GET_DOMINOS,
    }
}

export function addDomino(domino) {
    return {
        type: ADD_DOMINO,
        payload: domino
    }
}