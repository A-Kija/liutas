
function Circle12Display(props) {

    return (
        <>
            <div className="circler" style={{backgroundColor:props.color1}}>
            <span>{props.digit1}</span>
            </div>

            <div className="circler" style={{backgroundColor:props.color2}}>
            <span>{props.digit2}</span>
            </div>
        </>
    )
}

export default Circle12Display;