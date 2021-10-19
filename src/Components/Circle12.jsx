import { useState } from "react";

function Circle12(props) {

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
            <div className="circler" style={{backgroundColor:props.color1}}>
            <span>{digit1}</span>
            <button onClick={addOne}>Yes!</button>
            </div>

            <div className="circler" style={{backgroundColor:props.color2}}>
            <span>{digit2}</span>
            <button onClick={addMany}>Yes Yes!</button>
            </div>

            <button onClick={set0} style={{width: '300px'}}>0!</button>
        </>
    )
}

export default Circle12;