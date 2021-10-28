import { useEffect, useState } from "react";

function ZooModal({showModal, hide, animal, edit, remove}) {
    const [inputs, setInputs] = useState({
        name: '',
        type: '',
        weight: '',
        born: ''
    })

    useEffect(() => {
        setInputs({
            name: animal.name,
            type: animal.type,
            weight: animal.weight,
            born: animal.born.slice(0,10)
        })
    },[animal])

    const handleEdit = () => {
        edit({
            name: inputs.name,
            type: inputs.type,
            weight: inputs.weight,
            born: inputs.born
        }, animal.id)
    }

    const formControl = (e, what) => {
        const inputsCopy = { ...inputs };
        inputsCopy[what] = e.target.value;
        setInputs(inputsCopy);
    }



    return (
        <div className="zoo__modal" style={{
            display: showModal ? 'flex' : 'none',
            top: window.scrollY + 100 + 'px'
            }}>
            <div className="zoo__form">
            <h2>Edit animal</h2>
            <div className="zoo__form__input">
                <span>Name</span><input type="text" value={inputs.name} onChange={(e) => formControl(e, 'name')} />
            </div>
            <div className="zoo__form__input">
            <span>Type</span><input type="text" value={inputs.type} onChange={(e) => formControl(e, 'type')} />
            </div>
            <div className="zoo__form__input">
            <span>Weight</span><input type="text" value={inputs.weight} onChange={(e) => formControl(e, 'weight')} />
            </div>
            <div className="zoo__form__input">
            <span>Born date</span><input type="date" value={inputs.born} onChange={(e) => formControl(e, 'born')} />
            </div>
            <div className="zoo__form__input__buttons">
            <button onClick={handleEdit}>Save</button>
            <button onClick={hide}>Cancel</button>
            <button onClick={() => remove(animal.id)}>Delete</button>
            </div>
        </div>
        </div>
    )
}

export default ZooModal;