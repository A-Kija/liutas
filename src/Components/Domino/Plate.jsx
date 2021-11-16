import Dot from "./Dot";

function Plate({plate}) {

    return (
        <div className="plate">
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