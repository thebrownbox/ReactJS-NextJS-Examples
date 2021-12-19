import React from "react";

export default class DisplayTextChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myValue: props.displayValue,
        };
    }

    //! 1. Ref: https://reactjs.org/docs/react-component.html#componentdidupdate
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.displayValue != this.props.displayValue) {
            console.log(
                "props.displayValue is changed from " +
                    prevProps.displayValue +
                    " to " +
                    this.props.displayValue
            );
            // this.setState({ myValue: this.props.displayValue });
            this.setState((state, props) => ({ myValue: this.props.displayValue }));
        }

        if (prevState.myValue != this.state.myValue) {
            console.log(
                "state.displayValue is changed from " +
                    prevState.myValue +
                    " to " +
                    this.state.myValue
            );
        }
    }

    render() {
        return (
            <>
                <h3>[Child] this.state.myValue: {this.state.myValue}</h3>
                {/* //! 2. To able to update from parent => Need to access from props */}
                <h3>[Child] this.props.displayValue: {this.props.displayValue}</h3>
            </>
        );
    }
}
