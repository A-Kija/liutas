
function CircleDisplay(props) {

    return (
        <>
            <div className="circler" style={{backgroundColor:props.color}}>
            <span>{props.digit}</span>
            <button onClick={props.sniurelis}>{props.text}</button>
            </div>
        </>
    )
}

export default CircleDisplay;