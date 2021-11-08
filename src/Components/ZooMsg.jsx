
function ZooMsg({msg, showMsg}) {

    return (
        <div className="zoo__msg" style={{height: showMsg ? '60px' : '0'}}>
            <span>{msg}</span>
        </div>
    )
}

export default ZooMsg