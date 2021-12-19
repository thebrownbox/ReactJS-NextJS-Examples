import { Slider } from "antd";
import React from "react";
import "antd/dist/antd.css";
import DisplayTextChildComponent from "./DisplayTextChildComponent";

export default class PassingDataPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myValue: 30,
        };
    }

    handleValueChanged = (newValue) => {
        console.log(newValue);
        this.setState({ myValue: newValue });
    };

    render() {
        return (
            <>
                <h1>Passing data</h1>
                <Slider
                    style={{ width: 300 }}
                    onChange={this.handleValueChanged}
                    defaultValue={this.state.myValue}
                />
                <div>[Parent] This is my state value: {this.state.myValue}</div>
                {/* //! Passing a changing state to a prop of child component */}
                <DisplayTextChildComponent displayValue={this.state.myValue} />
            </>
        );
    }
}
