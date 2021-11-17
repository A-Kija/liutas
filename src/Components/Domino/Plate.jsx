import Dot from "./Dot";
import Edit from "./Edit";

function Plate({plate, editId, selectEdit, del}) {

    if (plate.id === editId) {
        return (
            <Edit plate={plate} del={del}></Edit>
        )
    }

    return (
        <div className="plate" onClick={() => selectEdit(plate.id)}>
            <div className="left-half">
                <Dot dots={plate.left}></Dot>
            </div>
            <div className="right-half">
                <Dot dots={plate.right}></Dot>
            </div>
        </div>
    )
}

export default Plate;