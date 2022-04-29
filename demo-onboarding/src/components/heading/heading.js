
import React, { Component } from "react";
import './headingStyle.css';

class Heading extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return<>
            <h1>{this.props.title}</h1>
            <p>{this.props.subtext}</p>
        </>
    }
}

export default Heading;