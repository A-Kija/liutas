import { useState, useEffect } from "react";
import FieldAnimal from "./Components/FieldAnimal";
import idGenerator from "./Common/idGenerator";


function App() {

    const [field, setField] = useState([]);
    const [fieldNamber, setFieldNamber] = useState(1);

    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({
            id: idGenerator(),
            animal: what,
            field: parseInt(fieldNamber)
        });
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
        console.log(fieldCopy);
    }

    const selectField = e => {
        setFieldNamber(e.target.value);
    }

    const goHome = (id) => {
        const fieldCopy = field.slice();
        fieldCopy.forEach((a, i) => {
            if (a.id === id) {
                fieldCopy.splice(i, 1); 
            }
        });
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    useEffect(() => {
        const animalsFromStorage = localStorage.getItem('animals');
        if (null !== animalsFromStorage) {
            setField(JSON.parse(animalsFromStorage));
        }
    }, []);



    return (
        <>
            <div className="field">
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={1} fieldAnimal={fieldAnimal} goHome={goHome}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={2} fieldAnimal={fieldAnimal} goHome={goHome}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={3} fieldAnimal={fieldAnimal} goHome={goHome}></FieldAnimal>)}
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