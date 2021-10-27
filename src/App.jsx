import axios from "axios";
import { useEffect, useState } from "react";
import ZooList from "./Components/ZooList";
function App() {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3003/animals')
        .then(res => {
            setAnimals(res.data);
            console.log(res.data);
        })
    }, [])

    return (
        <div className="zoo">
            <ZooList animals={animals}></ZooList>
        </div>
    )
}

export default App;