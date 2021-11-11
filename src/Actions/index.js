import { ADD_ONE, REM_ONE_ONE } from "../Constants/types";

export function addOne() {
    return {
        type: ADD_ONE
    }
}

export function remOneOne() {
    return {
        type: REM_ONE_ONE
    }
}