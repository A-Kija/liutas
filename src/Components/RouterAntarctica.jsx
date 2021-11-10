import { Link } from "react-router-dom";

function RouterAntarctica () {
    return (
        <div className="antarctica">
        <h2>Antarctica</h2>
        <ul className="antarctica__menu">
            <li><Link to="penguin">Penguin</Link></li>
            <li><Link to="polar-bear">Polar Bear</Link></li>
            <li><Link to="seal">Seal</Link></li>
        </ul>
        </div>
    )
}
export default RouterAntarctica;