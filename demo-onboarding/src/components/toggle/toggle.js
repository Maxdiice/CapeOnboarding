import React, { Component, useState } from "react";
import './toggleStyle.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './toggleStyle.css';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButton-root.Mui-selected': {
    backgroundColor: '#F6F9FE',
    border: "1px solid #699CF1",
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
      borderLeft: "1px solid #699CF1 !important",
    },
  },
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(1),
    border: "1px solid #00000014",
    color: "#333333",
    boxSizing: "border-box",    /* Elevation/01dp */

    boxShadow: "0px 0px 1px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.12)",
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,

    }
  },
}));


function Toggle(props) {


  return (
    <StyledToggleButtonGroup
      size="small"
      value={props.formats}
      onChange={props.onChange}
    >
      <ToggleButton value="Facebook" sx={{ padding: '8px' }}>
        <RocketLaunchIcon sx={{ paddingRight: '6px' }} />
        Facebook
      </ToggleButton>
      <ToggleButton value="Snapchat" >
        <RocketLaunchIcon sx={{ paddingRight: '6px' }} />
        Snapchat
      </ToggleButton>
      <ToggleButton value="YouTube" >
        <RocketLaunchIcon sx={{ paddingRight: '6px' }} />
        YouTube
      </ToggleButton>
    </StyledToggleButtonGroup>
  )
}

export default Toggle;