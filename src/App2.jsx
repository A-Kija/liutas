import BlueSquare from './Components/BlueSquare';
import RedCircle from './Components/RedCircle';

function App() {

    return (
        <div>
            <BlueSquare buttonText={'S P A U S T I'}/>
            <BlueSquare buttonText={'S T U M T I'}/>
            <RedCircle color={'pink'} buttonText={'S P A U S T I'}/>
            <RedCircle color={'yellow'} buttonText={'K E L T I'}/>
        </div>
    );

}

export default App;