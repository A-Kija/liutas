import { ADD_ONE, REM_ONE_ONE } from "../Constants/types";

export function actionAddOne() {
    return {
        type: ADD_ONE
    }
}

export function actionRemOneOne() {
    return {
        type: REM_ONE_ONE
    }
}