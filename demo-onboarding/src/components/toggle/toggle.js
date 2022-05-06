import React from "react";
import './toggleStyle.css';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SvgIcon from '@mui/material/SvgIcon';
import GetSVG from '../../util/util';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiTouchRipple-child': {
    backgroundColor: '#699CF1'
  },
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: '#F6F9FE',
    border: "1px solid #699CF1",
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
      borderLeft: "1px solid #699CF1 !important",
    },
    '&:hover': {
      backgroundColor: '#EDF4FF'
    },
  },
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(1),
    border: "1px solid #00000014",
    textTransform: 'none',
    fontWeight: 'normal',
    color: "#333333",
    margin: '0 8px 8px 0',
    display: "flex !important",
    boxSizing: "border-box",    /* Elevation/01dp */
    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.12)",
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,

    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
      marginLeft: "0"
    },
    '&:hover': {
      backgroundColor: '#EDF4FF'
    },
  },
}));

function Toggle(props) {

  return <>
    {props.label === "Display channels" ? <br></br> : null}
    <h4>{props.label}</h4>
    <div className="flex-toggle">
      <StyledToggleButtonGroup sx={{
        display: "flex !important",
        flexWrap: "wrap !important",
        flexDirection: "row !important",
      }}>
        {props.list.map(item => {
          return (
            <ToggleButton
              value={item.title}
              selected={props.contact.includes(item.title)}
              onClick={props.onClick}
              sx={{ padding: '6px 8px' }}>
              <SvgIcon component={GetSVG(item.title)} inheritViewBox sx={{height:"32px", width:"32px", marginRight:"4px"}} />
              {item.title}
            </ToggleButton>
          )
        })}
      </StyledToggleButtonGroup>
    </div>
  </>
}

export default Toggle;