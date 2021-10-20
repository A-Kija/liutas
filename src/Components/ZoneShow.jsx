

function ZoneShow({show}) {


    if ('c' === show.shape) {
        return (
            <div className="zone-show">
                {show.count.map((_, i) => <div key={i} style={{
                    backgroundColor:show.color,
                    borderRadius: '50%'
                    }} >{i+1}</div>)}
            </div>
        )
    }
    else if ('s' === show.shape) {
        return (
            <div className="zone-show">
                {show.count.map((_, i) => <div key={i} style={{
                    backgroundColor:show.color
                    }} >{i+1}</div>)}
            </div>
        )
    }
    else if ('vl' === show.shape) {
        return (
            <div className="zone-show">
                {show.count.map((_, i) => <div key={i} style={{
                    backgroundColor:show.color,
                    width: '5px'
                    }} >{i+1}</div>)}
            </div>
        )
    }
    else if ('hl' === show.shape) {
        return (
            <div className="zone-show">
                {show.count.map((_, i) => <div key={i} style={{
                    backgroundColor:show.color,
                    height: '5px'
                    }} >{i+1}</div>)}
            </div>
        )
    }
    else {
        return (
            <div className="zone-show">
                
            </div>
        )
    }


}

export default ZoneShow;