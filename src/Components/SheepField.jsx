import { useState } from "react";


function SheepField() {

    const [counter, setCounter] = useState({count: 0});
    const [bgColor, setBgColor] = useState('darkturquoise')

    const clickSheep = what => {
        console.log(what);
        let newCounter = counter.count;
        switch(what) {
            case 'one': 
                newCounter++;
                break;
            case 'ten': 
                newCounter+=10;
                break;
            default: 
                newCounter=0;
                setBgColor('white');
        }
        setCounter({count:newCounter});
    }

    const changeColor = () => {
        if (bgColor === 'darkturquoise') {
            setBgColor('red');
        }
        else {
            setBgColor('darkturquoise');
        }
    }

    return (
        <div className="cow-field">
            <div className="counter" style={{color:bgColor}}>{counter.count}</div>
            <button onClick={()=>clickSheep('one')}>Add Sheep</button>
            <button onClick={()=>clickSheep('ten')}>Add 10 Sheeps</button>
            <button onClick={()=>clickSheep('go')}>Go Home</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default SheepField;