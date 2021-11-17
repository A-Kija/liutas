import { useEffect, useReducer, useState } from "react";
import { addDomino, delDomino, getDominos, hideMessage, showMessage } from "./Actions/domino";
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
    const [editId, setEditId] = useState(0);

    // CRUD

    //R-ead
    useEffect(()=>{
        dispachDominos(getDominos());
    },[]);

    //C-reate
    const create = domino => {
        dispachDominos(addDomino(domino));
        dispachMessage(showMessage('New domino plate was created.'));
        setTimeout(() => {dispachMessage(hideMessage())}, 3000);
    }

    //D-elete
    const deleteDomino = id => {
        dispachDominos(delDomino(id));
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
                editId={editId} 
                selectEdit={setEditId}
                del={deleteDomino}
                ></Plate>)
        }
        </div>

        <Message msg={message}></Message>
        </div>
    )
}


export default App;