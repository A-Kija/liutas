import {
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom";

function RouterCustomLink({ children, to}) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link style={{
                textDecoration: match ? 'underline' : 'none',
                color: match ? 'black' : 'white'
            }} to={to} >{children}</Link>
        </div>
    );
}

export default RouterCustomLink;