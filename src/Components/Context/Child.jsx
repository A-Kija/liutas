import { useContext } from "react";
import { Msg1, Msg2 } from "../../App";

function Child() {

    const message1 = useContext(Msg1);
    const message2 = useContext(Msg2);

    return (
        <div className="family">
            <h1>Child</h1>
            <h2>GOT MSG-1: {message1}</h2>
            <h2>GOT MSG-2: {message2}</h2>
            <h1>------------------------</h1>
            <Msg1.Consumer>
                {value => <h2>GOT MSG-1: {value}</h2>}
            </Msg1.Consumer>
            <Msg2.Consumer>
                {value => <h2>GOT MSG-2: {value}</h2>}
            </Msg2.Consumer>
        </div>
    )
}

export default Child;