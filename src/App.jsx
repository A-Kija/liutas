import {
    BrowserRouter as Router,
    Link,
    Routes,
    Route
} from "react-router-dom";
import RouterAfrica from "./Components/RouterAfrica";
import RouterAntarctica from "./Components/RouterAntarctica";
import RouterAustralia from "./Components/RouterAustralia";
import RouterBasic from "./Components/RouterBasic";


function App() {


    return (
        <Router>
            <h1>Hello there!</h1>
            <ul className="hello-menu">
                <li><Link to="/">Basic</Link></li>
                <li><Link to="/africa">Africa</Link></li>
                <li><Link to="/australia">Australia</Link></li>
                <li><Link to="/antarctica">Antarctica</Link></li>
            </ul>
            <Routes>
                <Route path="/" element={<RouterBasic/>}></Route>
                <Route path="/africa" element={<RouterAfrica/>}></Route>
                <Route path="/australia" element={<RouterAustralia/>}></Route>
                <Route path="/antarctica" element={<RouterAntarctica/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;