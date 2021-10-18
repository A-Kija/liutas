import CowField from './Components/CowField';
import SheepField from './Components/SheepField';

function App() {

    return (
        <>
            <h3>HeLLo, Cows!</h3>
            <CowField counterColor={'darkturquoise'}/>
            <h3>HeLLo, Sheeps!</h3>
            <SheepField/>
        </>
    )
}


export default App;