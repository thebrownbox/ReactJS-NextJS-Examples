/**
 * Ref: https://reactjs.org/docs/state-and-lifecycle.html
 */

import React from "react";
import "antd/dist/antd.css";
import ExLifeCycleComponent from "./ExLifeCycleComponent";
import { Button } from "antd";

export default class LifeCyclePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowComponent: false,
        };
    }

    handleButtonClicked() {
        this.setState((prevState) => {
            return {
                isShowComponent: !prevState.isShowComponent,
            };
        });
    }

    render() {
        return (
            <div style={{ margin: 20 }}>
                <div>This is Life Cycle Page!</div>
                <Button
                    type={this.state.isShowComponent ? "danger" : "primary"}
                    onClick={() => {
                        this.handleButtonClicked();
                    }}
                    shape="round"
                >
                    {this.state.isShowComponent ? "HIDE" : "SHOW"}
                </Button>
                {this.state.isShowComponent && <ExLifeCycleComponent />}
            </div>
        );
    }
}
