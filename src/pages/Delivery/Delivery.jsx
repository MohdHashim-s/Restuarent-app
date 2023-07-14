import React from 'react'
import {styled, } from "@mui/system";
import {Typography} from "@mui/material"
import { Box, Container } from '@mui/system';
import deliveryImg from "../../assets/DeliveryImg.png";
import CustomButton from "../../components/CustomButton/CustomButton";

const Delivery=() => {

    const CustomContainer = styled(Container)(({theme}) => ({
        display: "flex",
        backgroundColor: "#FED801",
        height: "416px",
        borderRadius: "15px",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: theme.spacing(5),
        [theme.breakpoints.down("md")]:{
          alignItems: "center",
          flexDirection: "column",
          height: "auto",
          padding: theme.spacing(3, 3, 0, 3),
          width: "90%",
        },
      }));

      const CustomBox = styled(Box)(({theme}) => ({
        padding: theme.spacing(10, 0, 10, 0),
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]:{
        
          padding: "0"
        },
      }));
    
  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
          sx={{ fontSize: "35px", color: "#fff", fontWeight: "700", fontFamily: "monospace" }}>
            Super fast delivery
          </Typography>
          <Typography
          sx={{ fontSize: "16px", color: "#000", fontWeight: "800", fontFamily: "monospace", my: 3 }}>
            Door to door delivery
          </Typography>
          <CustomButton
           backgroundColor="#fff"
           color="#17275F"
           buttonText="Order Now!!"
           />
        </Box>
        <img src={deliveryImg}
         alt="delivery"
         style={{maxWidth: "100%"}} />
      </CustomContainer>
    </CustomBox>

    )
}

export default Delivery