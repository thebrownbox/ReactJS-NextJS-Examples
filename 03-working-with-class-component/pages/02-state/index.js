import { Button, Input } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

class StatePage extends React.Component {
    //! 0. The props will be in the constructor's parameter
    constructor(props) {
        super(props);

        //! 1. In class component already have a state property to store data
        this.state = {
            myAge: 0,
            myName: "",
        };
    }

    handleTextInput(newValue) {
        console.log(this);

        //! 2.1 Using this.setState function to update state's properties
        this.setState({ myName: newValue });
    }

    handleAddNumber(offsetValue) {
        console.log(this);
        //! 2.2 Or using a arrow function to access previous state.
        this.setState((prev) => {
            return {
                myAge: prev.myAge + offsetValue,
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
                  <div>Your age is: {this.state.myAge}</div>
                <Button
                    type="primary"
                    shape="round"
                    onClick={() => this.handleAddNumber(-1)}
                >
                    <MinusOutlined />
                </Button>
                <Button
                    type="primary"
                    shape="round"
                    onClick={() => this.handleAddNumber(1)}
                >
                    <PlusOutlined />
                </Button>
            </div>
        );
    }
}
export default StatePage;
