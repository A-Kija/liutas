import Dot from "./Dot";
import Edit from "./Edit";

function Plate({plate, editDots, selectEdit, del, change, save}) {

    if (plate.id === editDots.id) {
        return (
            <Edit plate={plate} del={del} change={change} save={save} editDots={editDots}></Edit>
        )
    }

    return (
        <div className="plate" onClick={() => selectEdit(plate)}>
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