import { TextField } from "@mui/material";
import React, { useState } from "react";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import './textfieldStyle.css';

function Input(props) {

    //Check type of inputfield
    const fieldType = () => {
        switch (props.type) {
            case "email":
                return <TextField
                    id={props.id}
                    variant="outlined"
                    type="email"
                    required
                    error={!props.emailValidated}
                    label={props.title}
                    onBlur={props.emailValidation}
                    defaultValue={props.list ? props.list : null}
                    onChange={props.onChangeEmail}
                    helperText={props.emailValidated ? '' : 'Not a valid E-mail'}
                    sx={{margin: '16px 0px 8px'}}
                >
                    <FormHelperText id="component-error-text">Error</FormHelperText>
                </TextField>
            case "phonenumber":
                return <TextField
                    variant="outlined"
                    type="number"
                    sx={{margin: '8px 0px 16px'}}
                    label={props.title}
                    defaultValue={props.list ? props.list : null}
                />
            default:
                return <TextField
                variant="outlined"
                type={props.type}
                required
                label={props.title}
                defaultValue={props.list ? props.list : null}
            />
        }

    }


    return (
            <FormControl name={props.title} onChange={(e) => { props.onChange(e, props.index) }} fullWidth >
                {fieldType()}
            </FormControl>
    )   
}

export default Input;