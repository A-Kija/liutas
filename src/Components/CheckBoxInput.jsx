import { useState } from "react";


function CheckBoxInput() {

    const [value, setValue] = useState([false, true, false, true])

    const change = i => {
        const valueCopy = value.slice();
        valueCopy[i] = !valueCopy[i]
        setValue(valueCopy);
    }

    return (
        <>
            <div className="sq">
                <input onChange={() => change(0)} type="checkbox" checked={value[0]} />
                <input onChange={() => change(1)} type="checkbox" checked={value[1]} />
                <input onChange={() => change(2)} type="checkbox" checked={value[2]} />
                <input onChange={() => change(3)} type="checkbox" checked={value[3]} />
            </div>
        </>
    )
}

export default CheckBoxInput;