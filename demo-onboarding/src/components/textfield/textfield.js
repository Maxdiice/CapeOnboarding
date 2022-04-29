import { TextField } from "@mui/material";
import React, { Component } from "react";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import './textfieldStyle.css';

function Input(props) {
    return (
        <>
            <FormControl onChange={props.onChange} fullWidth >
                <TextField variant="outlined" label={props.title}></TextField>
            </FormControl>
        </>
    )
}

export default Input;