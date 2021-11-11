import { useState} from "react";
function App() {

    const [count, setCount] = useState(0);

    const addOne = () => setCount(count + 1);

    const remOneOne = () => setCount(count - 11);

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