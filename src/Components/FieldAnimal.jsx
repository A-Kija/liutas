
function FieldAnimal({ fieldAnimal, field }) {


    if (field === fieldAnimal.field && 'cow' === fieldAnimal.animal) {
        return (
            <div className="cow">
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'sheep' === fieldAnimal.animal) {
        return (
            <div className="sheep">
            </div>
        );
    }
    else if (field === fieldAnimal.field && 'horse' === fieldAnimal.animal) {
        return (
            <div className="horse">
            </div>
        );
    }
    else {
        return null;
    }

}

export default FieldAnimal;