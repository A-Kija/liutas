import ZoneEnter from "./Components/ZoneEnter";
import ZoneShow from "./Components/ZoneShow";
import { useState } from "react";

function App() {

    const [show, setShow] = useState({color:'', shape:'', count:[]})

    const showIt = (data) => {
        data.count = new Array(parseInt(data.count)).fill(null);
        setShow(data);       
    }

    return (
        <div className="zone">
            <ZoneShow show={show}></ZoneShow>
            <ZoneEnter showIt={showIt}></ZoneEnter>
        </div>
    )
}

export default App;