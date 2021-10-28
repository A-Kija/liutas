import axios from "axios";
import { useEffect, useState } from "react";
import ZooCreate from "./Components/ZooCreate";
import ZooList from "./Components/ZooList";
function App() {


    const [animals, setAnimals] = useState([]);
    const [lastUpdate, setLastUpdate] = useState(Date.now())

    useEffect(() => {
        axios.get('http://localhost:3003/animals')
        .then(res => {
            setAnimals(res.data);
            console.log(res.data);
        })
    }, [lastUpdate])

    const create = animal => {
        axios.post('http://localhost:3003/animals', animal)
        .then(res => {
            console.log(res.data);
            setLastUpdate(Date.now());
        })
    }

    return (
        <div className="zoo">
            <ZooCreate create={create}></ZooCreate>
            <ZooList animals={animals}></ZooList>
        </div>
    )
}

export default App;