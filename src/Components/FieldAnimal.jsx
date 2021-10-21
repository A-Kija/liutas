
function FieldAnimal({ fieldAnimal, field, goHome }) {


    if (field === fieldAnimal.field && 'cow' === fieldAnimal.animal) {
        return (
            <div className="cow" onClick={() => goHome(fieldAnimal.id)}>
                <h2>{fieldAnimal.id}</h2>
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'sheep' === fieldAnimal.animal) {
        return (
            <div className="sheep" onClick={() => goHome(fieldAnimal.id)}>
                <h2>{fieldAnimal.id}</h2>
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'horse' === fieldAnimal.animal) {
        return (
            <div className="horse" onClick={() => goHome(fieldAnimal.id)}>
                <h2>{fieldAnimal.id}</h2>
            </div>
        );
    }
    else {
        return null;
    }

}

export default FieldAnimal;