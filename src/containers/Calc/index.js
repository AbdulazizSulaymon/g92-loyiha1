import "./Calc.css"
import React, { Component } from 'react'
import { Table } from 'reactstrap';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

export default class Calc extends Component {
    constructor(props) {
        super(props);

        this.state = { display: "0" }
    }

    addText = (text) => {
        this.setState((state) => {
            return { display: (state.display != "0" && state.display || "") + text }
        })
    }


    buttons = [
        [
            {
                text: "AC", click: () => {
                    this.setState((state) => {
                        return { display: "0" }
                    })
                }
            },
            { text: "+/-", click: () => { } },
            { text: "%", click: () => { } },
            { text: "/", click: () => { this.addText("/") } }
        ],
        [
            { text: "7", click: () => { this.addText(7) } },
            { text: "8", click: () => { this.addText(8) } },
            { text: "9", click: () => { this.addText(9) } },
            { text: "*", click: () => { this.addText("*") } }
        ],
        [
            { text: "4", click: () => { this.addText(4) } },
            { text: "5", click: () => { this.addText(5) } },
            { text: "6", click: () => { this.addText(6) } },
            { text: "-", click: () => { this.addText("-") } }
        ],
        [
            { text: "1", click: () => { this.addText(1) } },
            { text: "2", click: () => { this.addText(2) } },
            { text: "3", click: () => { this.addText(3) } },
            { text: "+", click: () => { this.addText("+") } }
        ],
        [
            {
                text: <FontAwesomeIcon icon={faUndo} />, click: () => {
                    this.setState((state) => {
                        return { display: state.display.slice(0, state.display.length - 1) || "0" }
                    })
                }
            },
            { text: "0", click: () => { this.addText(0) } },
            { text: ".", click: () => { this.addText(".") } },
            {
                text: "=", click: () => {
                    this.setState((state) => {
                        return { display: eval(state.display) }
                    })
                }
            }
        ]
    ]

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th colSpan={4} className="text-end">{this.state.display}</th>
                    </tr>
                </thead>
                <tbody>
                    {this.buttons.map((row, indexRow) => {
                        return <tr>
                            {row.map((btn, index) => {
                                return <td >
                                    <Button onClick={btn.click} color="dark">{btn.text}</Button>
                                </td>
                            })}
                        </tr>
                    })}
                </tbody>
            </Table>
        )
    }
}
