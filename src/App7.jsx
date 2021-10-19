import { useState } from "react";
import ButtonColorChanger from "./Components/ButtonColorChanger";


function App() {

    const [bg, setBg] = useState('black');

    const changeBg = color => {
        setBg(color)
    }


    return (
        <div className="sq" style={{backgroundColor:bg}}>
            <ButtonColorChanger kasNors={changeBg}></ButtonColorChanger>
        </div>
    )
}

export default App;