import { ADD_LEFT, ADD_RIGHT } from "../Constants/dominoTypes";

export function add_left(payload) {
    return {
        type: ADD_LEFT,
        payload: payload
    }
}

export function add_right(payload) {
    return {
        type: ADD_RIGHT,
        payload: payload
    }
}