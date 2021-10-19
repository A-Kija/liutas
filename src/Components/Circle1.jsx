import { useState } from "react";


function Circle1(props) {

    const [digit, setDigit] = useState(0);

    return (
        <>
            <div className="circler" style={{backgroundColor:props.color}}>

            </div>
        </>
    )
}

export default Circle1;