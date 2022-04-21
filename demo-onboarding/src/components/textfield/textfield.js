import { TextField } from "@mui/material";
import React, { Component } from "react";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import './textfieldStyle.css';

class TextFieldStyled extends Component {

    render() {
        return  <div>
                    <FormControl fullWidth >
                        <TextField variant="outlined" label="First Name"></TextField>
                    </FormControl>
                </div>
    }
}

export default TextFieldStyled;