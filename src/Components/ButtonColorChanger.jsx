function ButtonColorChanger({kasNors}) {


    return (
        <>
        
        <button onClick={() => kasNors('black')}>Ja Black!</button>
        <button onClick={() => kasNors('pink')}>Ja Pink!</button>
        <button onClick={() => kasNors('yellow')}>Ja Yellow!</button>
        </>
    )


}

export default ButtonColorChanger;