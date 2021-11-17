function Edit({plate, del}) {

    const handleDelete = () => {
        del(plate.id);
    }

    return (
        <div className="domino__edit">
            <div>
            <input value={plate.left}></input>
            <input value={plate.right}></input>
            </div>
            <div className="domino__edit__buttons">
                <div className="domino__edit__buttons__ok">OK</div>
                <div className="domino__edit__buttons__x" onClick={handleDelete}>X</div>
            </div>
            
        </div>
    )
}

export default Edit;