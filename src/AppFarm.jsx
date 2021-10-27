import { useState, useEffect, useRef } from "react";
import FieldAnimal from "./Components/FieldAnimal";
import idGenerator from "./Common/idGenerator";

function App() {

    const [field, setField] = useState([]);
    const [fieldNamber, setFieldNamber] = useState(1);
    const [weight, setWeight] = useState('');
    const [fieldType, setFieldType] = useState('cow');

    const allAnimals = useRef(0);
    const types = useRef({cow:0, sheep:0, horse:0});
    const total = useRef(0)

    const handleWeight = e => {
        setWeight(e.target.value);
    }

    const selectfieldType = e => {
        setFieldType(e.target.value);
    }

    const stats = (fieldCopy) => {
        allAnimals.current = fieldCopy.length;
        types.current = {cow:0, sheep:0, horse:0};
        total.current = 0;
        fieldCopy.forEach(a => {
            types.current[a.animal]++;
            total.current += parseFloat(a.weight);
        })
    }

    const add = () => {
        const fieldCopy = field.slice();
        fieldCopy.push({
            id: idGenerator(),
            animal: fieldType,
            weight: weight,
            field: parseInt(fieldNamber)
        });
        setField(fieldCopy);
        stats(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    const selectField = e => {
        setFieldNamber(e.target.value);
    }

    const goHome = (id) => {
        const fieldCopy = field.slice();
        const ind = fieldCopy.findIndex(e => e.id === id);
        fieldCopy.splice(ind, 1);
        setField(fieldCopy);
        stats(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    const addWeight = (id, w) => {
        const fieldCopy = field.slice();
        const i = fieldCopy.findIndex(e => e.id === id);
        fieldCopy[i].weight = parseFloat(w);
        setField(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    const groupGoHome = (group) => {
        const fieldCopy = field.slice();
        while(true) {
            const ind = fieldCopy.findIndex(e => e.animal === group);
            if (ind < 0) {
                break;
            }
            fieldCopy.splice(ind, 1);
        }
        setField(fieldCopy);
        stats(fieldCopy);
        localStorage.setItem('animals', JSON.stringify(fieldCopy))
    }

    useEffect(() => {
        const animalsFromStorage = localStorage.getItem('animals');
        if (null !== animalsFromStorage) {
            setField(JSON.parse(animalsFromStorage));
            stats(JSON.parse(animalsFromStorage));
        }
    }, []);



    return (
        <>
            <h1>FARM CRUD</h1>
            <div className="statistics">
                <h2>Statistics</h2>
                <div className="stats">
                    All animals: {allAnimals.current}
                </div>
                <div className="stats">
                    Total: {total.current}
                </div>
                <div className="stats">
                    Cows: {types.current.cow}
                </div>
                <div className="stats">
                    Sheeps: {types.current.sheep}
                </div>
                <div className="stats">
                    Horses: {types.current.horse}
                </div>
            <div className="buttons-holder">
                <button onClick={() => groupGoHome('cow')}>Go cows</button>
                <button onClick={() => groupGoHome('sheep')}>Go sheeps</button>
                <button onClick={() => groupGoHome('horse')}>Go horses</button>
            </div>
            </div>
            <div className="field">
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={1} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={2} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight}></FieldAnimal>)}
                </div>
                <div className="field__part">
                    {field.map((fieldAnimal, i) => <FieldAnimal key={i} field={3} fieldAnimal={fieldAnimal} goHome={goHome} addWeight={addWeight}></FieldAnimal>)}
                </div>
            </div>
            <div className="new">
                <h2>Create new animal</h2>
                <span>Field No.</span>
                <select value={fieldNamber} onChange={selectField}>
                    <option value={1}>Field One</option>
                    <option value={2}>Field Two</option>
                    <option value={3}>Field Three</option>
                </select>
                <span>Animal type</span>
                <select value={fieldType} onChange={selectfieldType}>
                    <option value={'cow'}>Cow</option>
                    <option value={'sheep'}>Sheep</option>
                    <option value={'horse'}>Horse</option>
                </select>
                <span>Animal weight</span>
                <input type="text" onChange={handleWeight} value={weight} />
                <button onClick={add}>Add new animal</button>
            </div>
        </>
    );

}

export default App;