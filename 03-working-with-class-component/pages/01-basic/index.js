import React from "react";
//! 1. A class component has to extends from a React Component
class BasicPage extends React.Component {
    //! 4. If you have constructor function
    //! Make sure you can super first!!
    constructor() {
        super();
    }
    //! 2. The class have to implement render function to build the UI
    render() {
        return <>This is the first React Class Component!</>;
    }
}

//! 3. Always have to export default the class
export default BasicPage;
