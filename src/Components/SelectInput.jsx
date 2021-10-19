import { useState } from "react";


function SelectInput() {

    const [value, setValue] = useState('2')

    const change = e => {
        console.log('ja ja', e.target.value);
        setValue(e.target.value);
    }

    return (
        <>
            <div className="sq">
                <select onChange={change} value={value}>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={10}>Ten</option>
                    <option value={11}>Eleven</option>
                </select>
            </div>
        </>
    )
}

export default SelectInput;