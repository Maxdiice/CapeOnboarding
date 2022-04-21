
import React, { Component } from "react";
import './headingStyle.css';

class Heading extends Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return  <div>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.subtext}</p>
                </div>
    }
}

export default Heading;