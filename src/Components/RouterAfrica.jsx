import { useParams } from "react-router";

function RouterAfrica () {
    const paramsFromUrl = useParams();
    return (
        <h2>Africa Hello {paramsFromUrl.times} Times</h2>
    )
}
export default RouterAfrica;