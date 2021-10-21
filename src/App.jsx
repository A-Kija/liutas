import { useState, useEffect } from "react";
import FieldAnimal from "./Components/FieldAnimal";


function App() {

    const [field, setField] = useState([]);
    const [fieldNamber, setFieldNamber] = useState(1);

    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({ animal: what, field: parseInt(fieldNamber) });
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    const selectField = e => {
        setFieldNamber(e.target.value);
    }

    // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);

    return (
        <>
            <div className="field">
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={1} fieldAnimal={fieldAnimal}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={2} fieldAnimal={fieldAnimal}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={3} fieldAnimal={fieldAnimal}></FieldAnimal>)}
                </div>
            </div>
            <div className="buttons-holder">
            <button onClick={() => add('cow')}>Add cow</button>
            <button onClick={() => add('sheep')}>Add sheep</button>
            <button onClick={() => add('horse')}>Add horse</button>
            <select value={fieldNamber} onChange={selectField}>
                <option value={1}>Field One</option>
                <option value={2}>Field Two</option>
                <option value={3}>Field Three</option>
            </select>
            </div>
        </>
    );

}

export default App;