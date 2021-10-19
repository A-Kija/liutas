import { useState } from "react";


function TextInput() {

    const [value, setValue] = useState('')
    const [tvalue, setTvalue] = useState('')

    const change = e => {
        console.log('ja ja', e.target.value);
        setValue(e.target.value);
    }

    const tchange = e => {
        setTvalue(e.target.value);
    }

    return (
        <>
            <div className="sq">
                <input onChange={change} type="text" value={value}/>
                <textarea onChange={tchange} value={tvalue}></textarea>
            </div>
        </>
    )
}

export default TextInput;