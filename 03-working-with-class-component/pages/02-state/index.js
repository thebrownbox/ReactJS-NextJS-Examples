import { Button, Input } from "antd";
import React from "react";
import "antd/dist/antd.css";

class StatePage extends React.Component {
    constructor() {
        super();

        //! 1. In class component already have a state property to store data
        this.state = {
            myNumber: 0,
            myName: "",
        };
    }

    handleTextInput(newValue) {
        console.log({ newValue });
        console.log("this: " + this);

        //! this.setState function has to return a new object with the updated fields
        this.setState((prevState, props) => {
            console.log({ prevState });
            console.log({ props });
            return {
                myName: newValue,
            };
        });
    }

    handleAddNumber(offsetValue) {
        this.setState((prev, prop) => {
            return {
                ...prev,
                myNumber: prev.myNumber + offsetValue,
            };
        });
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <h1>State in Class Component</h1>
                <div>Your name is: {this.state.myName}</div>
                <Input
                    value={this.state.myName}
                    onChange={(e) => this.handleTextInput(e.target.value)}
                    placeholder="Insert your name"
                />
                <Button
                    type="primary"
                    shape="round"
                    onClick={() => this.handleAddNumber(-1)}
                >
                    -
                </Button>
                <span style={{ margin: 20 }}> {this.state.myNumber}</span>
                <Button
                    type="primary"
                    shape="round"
                    onClick={() => this.handleAddNumber(1)}
                >
                    +
                </Button>
            </div>
        );
    }
}
export default StatePage;
