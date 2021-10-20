import { useState } from "react";

function ZoneEnter({showIt}) {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#000000');
    const [shape, setShape] = useState('c');

    const formControl = (e, what) => {
        switch (what) {
            case 'count':
                setCount(e.target.value);
                break;
            case 'color':
                setColor(e.target.value);
                break;
            case 'shape':
                setShape(e.target.value);
                break;
                default:;
        }
    }

    const showClick = () => {
        const data = {
            count: count,
            color: color,
            shape: shape
        };
        showIt(data);
    }


    return (
        <div className="zone-enter">

            <div><span>Count: </span><input type="text" onChange={e => formControl(e, 'count')} value={count}></input></div>
            <div><span>Color: </span><input type="color"onChange={e => formControl(e, 'color')} value={color}></input></div>
            <div><span>Shape: </span>
            <select onChange={e => formControl(e, 'shape')} value={shape}>
                <option value="c">Circle</option>
                <option value="s">Square</option>
                <option value="hl">Horizontal line</option>
                <option value="vl">Vertical line</option>
            </select>
            </div>
            <button onClick={showClick}>Show it to me</button>



        </div>
    )
}

export default ZoneEnter;