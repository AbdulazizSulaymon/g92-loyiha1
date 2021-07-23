import "./Loading.css"
import React, { Component } from 'react'

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = { step: 0, color: "red" }

        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.timer = setInterval(() => {
            if (this.state.step < 100) this.setState((state) => {
                return { step: state.step + 1 }
            })
        }, 100);
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
        clearInterval(this.timer)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");

        if (this.state.step >= 30 && this.state.step < 70 && this.state.color != "yellow")
            this.setState((state) => { return { color: "yellow" } });
        else if (this.state.step >= 70 && this.state.color != "green")
            this.setState((state) => { return { color: "green" } });
    }

    render() {
        return (
            <div className="loadingContainer">
                <div className="loading"
                    style={{ width: `${this.state.step}%`, backgroundColor: this.state.color }}>
                    {this.state.step}%
                </div>
            </div>
        )
    }
}
