import { Button } from "@mui/material";
import React, { Component } from "react";
import './buttonStyle.css';

class ButtonStyled extends Component {

    render() {
        return  <div>
                    <Button className="btn btn-main">Continue</Button>
                    <Button className="btn btn-secondary">previous</Button>
                </div>
    }
}

export default ButtonStyled;