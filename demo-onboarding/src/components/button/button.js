import { Button } from "@mui/material";
import React, { Component } from "react";
import './buttonStyle.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function ButtonStyled(props) {

    const backButton = () => {
        if (props.currentQuestion === 0) {
    }   else {
        return <Button className="btn btn-secondary" onClick={props.previous} startIcon={<ArrowBackIosIcon sx={{height: "16px", marginRight: "0px", textDecoration: "none"}}/>}  sx={{marginTop: "8px"}}>{props.previousText}</Button>
    }
}
    if (props.currentQuestion === 6) {
        return;
    } else return (
        <>  
            <div className="margin"/>
            <Button className="btn btn-main" onClick={props.onClick} disabled={!props.disabled}>Continue</Button>
            {backButton()}
        </>
    )
}

export default ButtonStyled;