import { useReducer } from 'react';
import { addLeft, addRight } from '../../Actions/domino';
import { dominoPlateReducer, startPos } from '../../Reducers/dominoReducer';


function Create({create}) {
    const [plate, dispachPlate] = useReducer(dominoPlateReducer, startPos);

    const handleInput = (e, P) => {
        if ('L' === P) {
            dispachPlate(addLeft(e.target.value));
        }
        if ('R' === P) {
            dispachPlate(addRight(e.target.value));
        }
    }

    const handleCreate = () => {
        create({
            left: plate.left,
            right: plate.right
        })
    }

    return (
        <div className="domino__create">
            <div className="domino__create__header">
                Create new DOMINO plate
            </div>
            <div className="domino__create__body">
                <div>
                <input type="text" style={{
                    backgroundColor: plate.leftErr ? 'deeppink' : 'white'
                }} onChange={e => handleInput(e, 'L')} value={plate.left}></input>
                <input type="text" style={{
                    backgroundColor: plate.rightErr ? 'deeppink' : 'white'
                }} onChange={e => handleInput(e, 'R')} value={plate.right}></input>
                </div>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    )
}

export default Create;