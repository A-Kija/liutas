import { useReducer } from 'react';
import { add_left, add_right } from '../../Actions/domino';
import { dominoPlateReducer } from '../../Reducers/dominoReducer';

function Create() {
    const [plate, dispachPlate] = useReducer(dominoPlateReducer, {left: 0, right: 0});

    const handleInput = (e, P) => {
        if ('L' === P) {
            dispachPlate(add_left(e.target.value));
        }
        if ('R' === P) {
            dispachPlate(add_right(e.target.value));
        }
        
    }

    return (
        <div className="domino__create">
            <div className="domino__create__header">
                Create new DOMINO plate
            </div>
            <div className="domino__create__body">
                <div>
                <input type="text" onChange={e => handleInput(e, 'L')} value={plate.left}></input>
                <input type="text" onChange={e => handleInput(e, 'R')} value={plate.right}></input>
                </div>
                <button>Create</button>
            </div>
        </div>
    )
}

export default Create;