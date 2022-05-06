import Checkbox from '@mui/material/Checkbox';
import React from "react";
import './multiStyle.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import GetSVG from '../../util/util';



function Multi(props) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2971EB",
      }
    },
  });
  


  return  (
    <ThemeProvider theme={theme}>      
      <div
      onClick={() => props.onChange(props.id)}
      className={"radio-option radio-option-big"  +  (props.visible[props.id]? ' active' : '' )}
      >
        <div className={"icon-big"}>
          <SvgIcon component={GetSVG(props.icon)} inheritViewBox />
        </div>
        <div className={"question-text question-text-big"}>
          <h3>{props.title}</h3>
          <p><small>{props.description}</small></p>
        </div> 
        <Checkbox
          checked={props.visible[props.id]}
          value={props.id}
          onChange={() => props.onChange(props.id)}
        />
      </div>
    </ThemeProvider>
  )
}

export default Multi;