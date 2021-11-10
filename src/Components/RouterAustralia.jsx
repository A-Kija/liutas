import { useParams } from "react-router";

function RouterAustralia () {
    const params = useParams();
    return (
        <h2>Australia Hello from {params.from} {params.times} times</h2>
    )
}
export default RouterAustralia;