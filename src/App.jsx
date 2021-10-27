import axios from "axios";
import { useEffect } from "react";
function App() {

    useEffect(() => {
        axios.get('http://localhost:3003/test')
        .then(res => {
            console.log(res.data);
        })
    }, [])

    return (
        <>

        </>
    )
}

export default App;