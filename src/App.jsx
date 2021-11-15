import { useEffect, useReducer } from "react";
import { addDomino, getDominos } from "./Actions/domino";
import Create from "./Components/Domino/Create";
import { dominosReducer } from "./Reducers/dominoReducer";

function App() {

    const [dominos, dispachDominos] = useReducer(dominosReducer, []);

    useEffect(()=>{
        dispachDominos(getDominos());
    },[]);

    const create = domino => {
        dispachDominos(addDomino(domino))
    }

    return (
        <div className="domino">
            <h1>Domino</h1>
        <Create create={create}></Create>

        </div>
    )
}


export default App;