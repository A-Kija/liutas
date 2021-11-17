import { useEffect, useReducer, useState } from "react";
import { addDomino, delDomino, getDominos, hideMessage, showMessage, updateDomino } from "./Actions/domino";
import Create from "./Components/Domino/Create";
import Message from "./Components/Domino/Message";
import Plate from "./Components/Domino/Plate";
import { dominosReducer, messageReducer } from "./Reducers/dominoReducer";

function App() {

    const [dominos, dispachDominos] = useReducer(dominosReducer, []);
    const [message, dispachMessage] = useReducer(messageReducer, {
        text: '',
        show: false
    });
    const [editDots, setEditDots] = useState({ left: 0, right: 0, id: 0 });

    // CRUD
    //R-ead
    useEffect(() => {
        dispachDominos(getDominos());
    }, []);

    //C-reate
    const create = domino => {
        dispachDominos(addDomino(domino));
        dispachMessage(showMessage('New domino plate was created.'));
        setTimeout(() => { dispachMessage(hideMessage()) }, 3000);
    }

    //D-elete
    const deleteDomino = id => {
        dispachDominos(delDomino(id));
    }

    //U-pdate
    const update = (id, domino) => {
        dispachDominos(updateDomino(id, domino));
    }

    //Edit imputs CONTROL
    const selectEdit = domino => {
        setEditDots(domino);
    }

    const save = () => {
        update(editDots.id, {
            left: editDots.left,
            right: editDots.right,
        });
        setEditDots({ left: 0, right: 0, id: 0 });
    }

    const change = (side, dots) => {
        const copyEditDots = { ...editDots };
        if ('L' === side) {
            copyEditDots.left = dots;
        }
        else if ('R' === side) {
            copyEditDots.right = dots;
        }
        console.log('ja', copyEditDots)
        setEditDots(copyEditDots)
    }



    return (
        <div className="domino">
            <h1>Domino</h1>
            <Create create={create}></Create>
            <div className="domino__table">
                {
                    dominos.map(p => <Plate
                        key={p.id}
                        plate={p}
                        change={change}
                        save={save}
                        editDots={editDots}
                        selectEdit={selectEdit}
                        del={deleteDomino}
                    ></Plate>)
                }
            </div>

            <Message msg={message}></Message>
        </div>
    )
}


export default App;