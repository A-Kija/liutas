import CircleDisplay from "./Components/CircleDisplay";

import { useState } from "react";

function App() {

    const [digit1, setDigit1] = useState(0);
    const [digit2, setDigit2] = useState(0);

    const addOne = () => {
        setDigit1(digit1 + 1);
    }

    const addMany = () => {
        setDigit2(digit2 + digit1);
    }

    const set0 = () => {
        setDigit1(0);
        setDigit2(0);
    }

    return (
        <>
            <CircleDisplay text={'Yes!'} color={'pink'} digit={digit1} sniurelis={addOne}/>
            <CircleDisplay text={'Yes Yes!'}  color={'yellow'} digit={digit2} sniurelis={addMany} />
            <button onClick={set0} style={{width: '300px'}}>0!</button>
        </>
    )
}

export default App;