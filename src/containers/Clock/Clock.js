import "./Clock.css"
import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = { time: new Date() }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            console.log(this.state.time);
            this.setState((state) => {
                return { time: new Date() };
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    renderTime = (time) => {
        return time < 10 ? "0" + time : time
    }

    render() {
        console.log("render is starting");
        return (
            <div>
                <h1>{this.renderTime(this.state.time.getHours())}:{this.renderTime(this.state.time.getMinutes())}:{this.renderTime(this.state.time.getSeconds())}</h1>
            </div>
        )
    }
}

export default Clock;