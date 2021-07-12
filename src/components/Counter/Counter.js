import "./Counter.css"
import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: props.startValue }
    }

    // state = { value: 0 }

    changeValue = () => {
        this.setState((state) => {
            return { value: state.value + 1 };
        })
    }

    render() {
        return <button className="btn btn-dark me-3" onClick={this.changeValue}>
            {this.state.value}
        </button>
    }
}

export default Counter;