import React from 'react'
import {styled} from '@mui/system'
import { Button } from '@mui/material';
const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  welcomeBtn,
  gvideBtn,
  getStarteBtn,
}) =>{
  const CustomButton = styled(Button)(({theme})=>({
    backgroundColor: backgroundColor,
    color: color,
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: '0.5 rem 1.25rem',
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "7px solid transparent",
    "&:hover":{
      backgroundColor:color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("md")]:{
      margin: (welcomeBtn || getStarteBtn) && theme.spacing(0, "auto", 3, "auto"),
      width: (welcomeBtn || getStarteBtn) && "90%",
    },
    [theme.breakpoints.down("sm")]:{
      marginTop: gvideBtn && theme.spacing(3),
      width: gvideBtn && "90%",
    },
    
  }));
  return(
    <CustomButton>{buttonText}</CustomButton>
  )
}
export default CustomButton