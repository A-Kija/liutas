

function RedCircle({color, buttonText}) {

    return (

        <div className="red-circle" style={ {backgroundColor:color}  }>
            <button>{buttonText}</button>
        </div>

    );

}

export default RedCircle;