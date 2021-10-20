import { useState, useEffect } from "react";
import FieldAnimal from "./Components/FieldAnimal";


function App() {

    const [field, setField] = useState([])

    const add = (what) => {
        const fieldCopy = field.slice();
        fieldCopy.push({animal:what});
        setField(fieldCopy);
        console.log(fieldCopy);
    }

    // useEffect(() => {
    //     console.log('susirenderino')
    // }, []);

    return (
        <div className="field">
        <div>
          {field.map((fieldAnimal, i)=><FieldAnimal key={i} fieldAnimal={fieldAnimal}></FieldAnimal>)}
        </div>
        <button onClick={() => add('cow')}>Add cow</button>
        <button onClick={() => add('sheep')}>Add sheep</button>
        </div>
    );

}

export default App;