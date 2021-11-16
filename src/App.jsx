import { useEffect, useReducer } from "react";
import { addDomino, getDominos, hideMessage, showMessage } from "./Actions/domino";
import Create from "./Components/Domino/Create";
import Message from "./Components/Domino/Message";
import Plate from "./Components/Domino/Plate";
import { dominosReducer, messageReducer } from "./Reducers/dominoReducer";

function App() {

    const [dominos, dispachDominos] = useReducer(dominosReducer, []);
    const [message, dispachMessage] = useReducer(messageReducer, {
        text: '',
        show: false
    })

    useEffect(()=>{
        dispachDominos(getDominos());
    },[]);

    const create = domino => {
        dispachDominos(addDomino(domino));
        dispachMessage(showMessage('New domino plate was created.'));
        setTimeout(() => {dispachMessage(hideMessage())}, 3000);
    }

    return (
        <div className="domino">
            <h1>Domino</h1>
        <Create create={create}></Create>
        {
            dominos.map(p => <Plate key={p.id} plate={p}></Plate>)
        }

        <Message msg={message}></Message>
        </div>
    )
}


export default App;