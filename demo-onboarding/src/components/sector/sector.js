import Checkbox from '@mui/material/Checkbox';
import React from "react";
import './sectorStyle.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import SvgIcon from '@mui/material/SvgIcon';
import GetSVG from '../../util/util';



function Sector(props) {

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
      onClick={() => props.onChange(props.value)}
      className={"radio-option radio-option-small"  +  (props.sector.includes(props.value)? ' active' : '' )}
      >
        <div className={"icon-small"}>
          <SvgIcon component={GetSVG(props.icon)} inheritViewBox />
        </div>
        <div className={"question-text question-text-small"}>
          <h3>{props.title}</h3>
        </div> 
        <Checkbox
          checked={props.sector.includes(props.value)}
        />
      </div>
    </ThemeProvider>
  )
}

export default Sector;