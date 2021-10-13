import { Component } from 'react';


class Clock extends Component {

    constructor(props) {
        super();
        this.state = {
            clock: Date.now(),
            color: '#' + Math.floor(Math.random()*16777215).toString(16)
        };
    }

    componentDidMount() {

        // setInterval(
        //     () => this.tick(),
        //     1000
        // );
    }

    tick() {
        this.setState({
          clock: Date.now(),
          color: '#' + Math.floor(Math.random()*16777215).toString(16)
        });
      }

    click = () => {

// console.log(this)

    this.setState({
        clock: Date.now(),
        color: '#' + Math.floor(Math.random()*16777215).toString(16)
    });
    }



    render() {
        return (
            <>
            <h1 style={{backgroundColor: this.state.color}}>{this.state.clock}
            <button onClick={this.click}>CLICK</button>
            </h1>
            
            </>
        )
    }

}

export default Clock;