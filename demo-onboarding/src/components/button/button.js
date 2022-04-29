import { Button } from "@mui/material";
import React, { Component } from "react";
import './buttonStyle.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';


function ButtonStyled(props) {

    const backButton = () => {
        if (props.currentQuestion === 0) {
    }   else {
        return <Button className="btn btn-secondary" onClick={props.previous}>previous</Button>
    }
}

    return (
        <>   
            <div className="Margin"/>
            <Button className="btn btn-main" onClick={props.onClick} disabled={!props.disabled}>Continue</Button>
            {backButton()}
        </>
    )
}

export default ButtonStyled;