function Dot({ dots }) {

    switch (dots) {
        case 1:
            return (
                <div className="dot-container dot-container-1">
                    <div className="dot"></div>
                </div>
            )
        case 2:
            return (
                <div className="dot-container dot-container-2">
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            )
        case 3:
            return (
                <div className="dot-container dot-container-3">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            )
        case 4:
            return (
                <div className="dot-container dot-container-4">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            )
        case 5:
            return (
                <div className="dot-container dot-container-5">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            )
        case 6:
            return (
                <div className="dot-container dot-container-6">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            )
        default:
            return (
                <div className="dot-container dot-container-0">
                </div>
            )
    }
}

export default Dot;

