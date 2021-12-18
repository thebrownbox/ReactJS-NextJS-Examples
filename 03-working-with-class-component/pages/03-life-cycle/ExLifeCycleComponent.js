import React from "react";
import { Card, Avatar, Image, Button } from "antd";
import {
    MinusOutlined,
    PlusOutlined,
    WarningOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

export default class ExLifeCycleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myAge: 0,
        };
    }

    //! 1. Run when component is mounted: => preparing data
    componentDidMount() {
        console.log("Child: componentDidMount");
    }

    //! 2. Run when component is going to unmounted => cleaning up
    componentWillUnmount() {
        console.log("Child: componentWillUnmount");
    }

    //! 3. Whenever it re-render | state updated
    componentDidUpdate() {
        console.log("Child: componentDidUpdate");
    }

    handleAddNumber(offsetValue) {
        this.setState((prev) => {
            const newAge = prev.myAge + offsetValue;
            console.log({ newAge });
            return {
                myAge: newAge,
            };
        });
    }

    render() {
        console.log("render");
        return (
            <>
                <div>ExLifeCycleComponent </div>
                <div>Your age is: {this.state.myAge}</div>
                <Button
                    type="warning"
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
            </>
        );
    }
}
