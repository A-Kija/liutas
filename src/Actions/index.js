import { ADD_ONE, DO_MULTIPLY, REM_ONE_ONE } from "../Constants/types";

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

export function actionDoMultiplay(payload) {
    return {
        type: DO_MULTIPLY,
        payload: payload
    }

}