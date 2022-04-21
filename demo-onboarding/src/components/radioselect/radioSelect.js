import Radio from '@mui/material/Radio';
import React, { Component, useState } from "react";
import './radioSelectStyle.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';



function RadioSelect(props) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#EF33F9",
      },
    },
  });

  return  (
    <ThemeProvider theme={theme}>
    <div className="radio-group">   
      <div className={"radio-option " + (props.selectedValue === 'a' ? 'active' : '')}  >
        <div className="question-text">
          <h3>{props.questionTitle}</h3>
          <p><small>{props.questionDescription}</small></p>
        </div>           
        <Radio
          checked={props.selectedValue === 'a'}
          onClick={props.onChange}
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
      </div>
      
      <div className={"radio-option " + (props.selectedValue === 'b' ? 'active' : '')}>
        <div className="question-text">
        <h3>{props.questionTitle}</h3>
          <p><small>{props.questionDescription}</small></p>
        </div>  
        <Radio
          checked={props.selectedValue === 'b'}
          onClick={props.onChange}
          value="b"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'B' }}
        />
      </div>
 
      
      <div className={"radio-option " + (props.selectedValue === 'c' ? 'active' : '')}>
        <div className="question-text">
          <h3>{props.questionTitle}</h3>
          <p><small>{props.questionDescription}</small></p>
        </div>  
        <Radio
          checked={props.selectedValue === 'c'}
          onClick={props.onChange}
          value="c"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'C' }}
        />
      </div>
    </div>
    </ThemeProvider>
  )
}

export default RadioSelect;