import Radio from '@mui/material/Radio';
import React from "react";
import './selectStyle.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import SvgIcon from '@mui/material/SvgIcon';
import GetSVG from '../../util/util';



function Select(props) {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#2971EB",
      }
    },
  });
  
  return  (
    <ThemeProvider theme={theme}>      
      <div  className={"radio-option radio-option-" + props.answerSize + (props.selectedValue === props.questionTitle ? ' active' : '')}>
        <div className={"icon-" + props.answerSize}>
          
          <SvgIcon component={GetSVG(props.icon)} inheritViewBox />
        </div>
        <div className={"question-text question-text-" + props.answerSize}>
          <h3>{props.questionTitle}</h3>
          <p><small>{props.questionDescription}</small></p>
        </div> 
        <Radio
            checked={props.selectedValue === props.questionTitle}  
            onClick={props.onChange}
            value={props.questionTitle}
            id="testID"
            name="radio-buttons"
            inputProps={{ 'aria-label': 'B' }}
            sx={{
              '& .MuiSvgIcon-root': {
                fontSize: 18,
              },
            }}
          />
      </div>
    </ThemeProvider>
  )
}

export default Select;