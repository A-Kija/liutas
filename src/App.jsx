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
import RouterNotFound from "./Components/RouterNotFound";
import RouterPenguin from "./Components/RouterPenguin";
import RouterPolarBear from "./Components/RouterPolarBear";
import RouterSeal from "./Components/RouterSeal";


function App() {


    return (
        <Router>
            <h1>Hello there!</h1>
            <ul className="hello-menu">
                <li><Link to="/">Basic</Link></li>
                <li><Link to="/africa/77">Africa 77</Link></li>
                <li><Link to="/africa/14">Africa 14</Link></li>
                <li><Link to="/africa/24">Africa 24</Link></li>
                <li><Link to="/australia/15/kangaroo">Australia 15 kangaroo</Link></li>
                <li><Link to="/australia/354/platypus">Australia 354 platypus</Link></li>
                <li><Link to="/antarctica">Antarctica</Link></li>
            </ul>
            <Routes>
                <Route index element={<RouterBasic/>}></Route>
                <Route path="/africa/:times" element={<RouterAfrica/>}></Route>
                <Route path="/australia/:times/:from" element={<RouterAustralia/>}></Route>
                <Route path="/antarctica" element={<RouterAntarctica/>}>
                    <Route path="penguin" element={<RouterPenguin/>}></Route>
                    <Route path="polar-bear" element={<RouterPolarBear/>}></Route>
                    <Route path="seal" element={<RouterSeal/>}></Route>
                </Route>
                <Route path="*" element={<RouterNotFound/>} />
            </Routes>
        </Router>
    )
}

export default App;