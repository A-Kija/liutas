import { useReducer } from "react";
import countReducer from "./Reducers/countReducer";
import { actionAddOne, actionRemOneOne } from "./Actions";
function App() {

    // const [count, setCount] = useState(0);
    const [count, countDispatch] = useReducer(countReducer, 0)

    // const addOne = () => setCount(count + 1);
    const addOne = () => countDispatch(actionAddOne());

    // const remOneOne = () => setCount(count - 11);
    const remOneOne = () => countDispatch(actionRemOneOne());

    return (
        <div className="reducer">
            <h1>Hello, Reducer!</h1>
            <h1>{count}</h1>
            <div className="reducer__buttons">
                <button onClick={addOne}>+1</button>
                <button onClick={remOneOne}>-11</button>
            </div>
        </div>
    )
}

export default App;