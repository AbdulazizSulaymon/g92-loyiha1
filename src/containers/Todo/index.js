import "./Todo.css"
import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faPlus, faSun } from "@fortawesome/free-solid-svg-icons"
import { Button, Input } from "reactstrap"
import { ListGroup, ListGroupItem } from 'reactstrap';

let jcBetween = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}

class Todo extends Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = { tasks: props.tasks, typing: "" }
    }

    typing = (event) => {
        console.log(event.target.value);

        console.log(this.state);

        this.setState((state) => {
            return {
                typing: event.target.value,
            }
        })
    }

    add = () => {
        this.setState((state) => {
            let newTasks = [...state.tasks];

            newTasks.push({
                text: state.typing,
                completed: false
            })

            return { tasks: newTasks, typing: "" }
        })
    }

    render() {
        return (
            <div className="todo-panel">
                <div style={jcBetween}>
                    <h1 className="title">TODO</h1>
                    <Button color="link" className="text-white fs-3" >
                        <FontAwesomeIcon icon={faSun} />
                    </Button>
                </div>
                <div className="item p-2 d-flex align-items-center">
                    <button className="cirleButton" onClick={this.add}>
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                    <Input placeholder="new task" value={this.state.typing} onChange={this.typing} />
                </div>
                <ListGroup className="todoList mt-5" >
                    {
                        this.state.tasks.map((value, index) => {
                            return <ListGroupItem
                                className={`d-flex align-items-center 
                                            ${value.completed && "completed" || ""}`}>
                                <button className="cirleButton">
                                    <FontAwesomeIcon icon={faCheck} className="d-none checked" />
                                </button>
                                <p className="text">{value.text}</p>
                            </ListGroupItem>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}

export default Todo;