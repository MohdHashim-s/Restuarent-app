import React from 'react'
import {styled} from '@mui/system'
import { Box, Typography } from '@mui/material'

import CustomButton from "../../components/CustomButton/CustomButton"

import buyItem from "../../assets/buy_icon.png";
import sellIcon from "../../assets/sell_icon.png";
import rentIcon from "../../assets/sell_icon.png";

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


function Booking() {

const CustomBox = styled(Box)(({theme}) => ({
  width: "30%",
  [theme.breakpoints.down("md")]:{
    width: "85%"
  }
}))

const GuideBox = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("sm")]:{
    margin: theme.spacing(2, 0, 2, 0),
  },

}));

const GuidesBox = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down("md")]:{
    width: "100%",
  },
  [theme.breakpoints.down("sm")]:{
    marginBottom: "0%",
    flexDirection: "column",
  },

}));

  return (
    <Box
    sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
    }}
    >
        <div
        style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "2 auto",
            borderRadius: "2px",
        }}
        ></div>

        
        <Typography
        variant='h3'
        sx={{ fontSize: "35px", fontWeight: 'bold', color:"#000369", my:3 }}
        >
            How to Book?
        </Typography> 
        <CustomBox>
          <Typography
          variant='body2'
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
          >
            Everithing you need ti know  when you book for advance slot
          </Typography>
        </CustomBox>
        <GuidesBox>
          <GuideBox>
            <img src={buyItem} alt='buyicon' />
            <Typography
            variant='body2'
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#383c45",
              my: 1,
            }}
            >
              Order Guides
            </Typography>
            <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              <Typography
              variant='body2'
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#0689FF",
              }}
              >
                How to order
              </Typography>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>

          </GuideBox>

          <GuideBox>
            <img src={sellIcon} alt='sellicon' />
            <Typography
            variant='body2'
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#383c45",
              my: 1,
            }}
            >
              Booking guide
            </Typography>
            <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              <Typography
              variant='body2'
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#0689FF",
              }}
              >
                How to book
              </Typography>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>

          </GuideBox>

          <GuideBox>
            <img src={buyItem} alt='buyicon' />
            <Typography
            variant='body2'
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#383c45",
              my: 1,
            }}
            >
              Payment guides
            </Typography>
            <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              <Typography
              variant='body2'
              sx={{
                fontWeight: "bold",
                fontSize: "14px",
                color: "#0689FF",
              }}
              >
                payment methods
              </Typography>
              <ArrowRightAltIcon style={{ color: "#0689FF" }} />
            </Box>

          </GuideBox>

          
        </GuidesBox>

        <CustomButton
        backgroundColor="#0F184C"
        color="#FFF"
        buttonText="see full guides"
        guideBtn={true}
        />

    </Box>
  )
}

export default Booking