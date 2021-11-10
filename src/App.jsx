import { createContext, useState } from "react";
import GranPa from "./Components/Context/GranPa";
export const Msg1 = createContext(''); // <=== gaunam komponenta, ne hookas
export const Msg2 = createContext(''); // <=== gaunam komponenta, ne hookas


function App() {

    const [message1, setMesage1] = useState('No Message 1');
    const [message2, setMesage2] = useState('No Message 2');
    const [message1ToChild, setMessage1ToChild] = useState('')
    const [message2ToChild, setMessage2ToChild] = useState('')
    
    const messageControl1 = e => {
        setMesage1(e.target.value);
    }
    const messageControl2 = e => {
        setMesage2(e.target.value);
    }

    const sender = () => {
        setMessage1ToChild(message1);
        setMessage2ToChild(message2);
    }

    return (
        <div className="context">
            <h1>APP</h1>
            <input type="text" onChange={messageControl1} value={message1}></input>
            <input type="text" onChange={messageControl2} value={message2}></input>
            <button onClick={sender}>APP message</button>
            <Msg1.Provider value={message1ToChild}>
            <Msg2.Provider value={message2ToChild}>
            <GranPa/>
            </Msg2.Provider>
            </Msg1.Provider>
        </div>

    )
}

export default App;