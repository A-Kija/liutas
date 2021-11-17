function Edit({plate, del, change, save, editDots}) {

    const handleDelete = () => {
        del(plate.id);
    }

    const handleInputs = (e, P) => {
        change(P, e.target.value);
    }

    const handleSave = () => {
        save();
    }

    return (
        <div className="domino__edit">
            <div>
            <input value={editDots.left} onChange={e=>handleInputs(e, 'L')}></input>
            <input value={editDots.right} onChange={e=>handleInputs(e, 'R')}></input>
            </div>
            <div className="domino__edit__buttons">
                <div className="domino__edit__buttons__ok" onClick={handleSave}>OK</div>
                <div className="domino__edit__buttons__x" onClick={handleDelete}>X</div>
            </div>
            
        </div>
    )
}

export default Edit;