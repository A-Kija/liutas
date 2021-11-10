import { Outlet } from "react-router-dom";
import RouterCustomLink from "./RouterCustomLink";

function RouterAntarctica () {
    return (
        <div className="antarctica">
        <h2>Antarctica</h2>
        <ul className="antarctica__menu">
            <li><RouterCustomLink to="penguin" children="Penguin"/></li>
            <li><RouterCustomLink to="polar-bear" children="Polar Bear"/></li>
            <li><RouterCustomLink to="seal" children="Seal"/></li>
        </ul>
        <Outlet/>
        </div>
    )
}
export default RouterAntarctica;