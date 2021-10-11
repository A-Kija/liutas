

function Box({ls, boxColor, boxNumber}) {

    return (
        <>
        <div className="black-box">
            <span style={{

                letterSpacing: ls,
                color: boxColor
                
                }}>This is the BLACK box namber: {boxNumber}</span>
        </div>
        </>
    )
}

export default Box;