function Edit({plate}) {
    return (
        <div className="domino__edit">
            <div>
            <input value={plate.left}></input>
            <input value={plate.right}></input>
            </div>
            <div className="domino__edit__ok">OK</div>
        </div>
    )
}

export default Edit;