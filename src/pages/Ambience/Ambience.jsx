import React from 'react'
import {  Divider, Typography, styled } from '@mui/material';
import { Box, Container } from "@mui/system";
import hoverCard from "../../assets/ambience.jpg";


function Ambience() {

    const CustomBox = styled(Box)(({theme}) => ({
        display: "flex",
        gap: theme.spacing(10),
        alignItems: "center",
        [theme.breakpoints.down("md")]:{
          textAlign: "center",
          flexDirection: "column",
        },
      }));

      const ImgContainerBox = styled(Box)(({theme}) => ({
         width: "100%",
        [theme.breakpoints.down("md")]:{
          alignItems: "center",
          flexDirection: "column",
          display: "flex",
        },
      }));

      const Divider = styled("div")(({theme}) => ({
        width: "13%",
        height: "5px",
        backgroundColor: "#000339",
       [theme.breakpoints.down("md")]:{
         marginLeft: "auto",
         marginRight: "auto",
       },
     }));

     const TextFlexBox = styled(Box)(({theme}) => ({
        display: "flex",
        marginTop: theme.spacing(7),
        gap: theme.spacing(10),
        justifyContent: "space-between",
        [theme.breakpoints.down("md")]:{
          flexDirection: "column",
          gap: theme.spacing(5),
        },
      }));

      const smallText = styled(Typography)(({theme}) => ({
        fontSize: "18px",
        fontWeight: "500",
        color: "#788007",
       [theme.breakpoints.down("md")]:{
         
         fontSize: "14px",
       },
     }));

     const LargeText = styled(Typography)(({theme}) => ({
        fontSize: "64px",
        fontWeight: "700",
        color: "#000",
       [theme.breakpoints.down("md")]:{
         
         fontSize: "32px",
       },
     }));


  return (
    <Box sx={{ py:10 }}>
        <Container>
            <CustomBox>
                <ImgContainerBox>
                    <img src={hoverCard} alt="hover" style={{ maxWidth: "100%" }} />
                </ImgContainerBox>

                <Box>
                    <Divider />
                    <Typography
                    sx={{
                        fontSize: "35px",
                        color: "#000339",
                        fontWeight: "700",
                        my: 3,
                    }}
                    >
                        You've found a ambiance you love.
                    </Typography>
                    <Typography
                    sx={{
                        fontSize: "16px",
                        color: "#5A6473",
                        lineHeight: "27px",
                    }}
                    >
                        Discover the epitome of culinary excellence at savoria,where every visit is an enchanting rendezvous with the art of dining.

                    </Typography>

                </Box>
            </CustomBox>

            <TextFlexBox>
                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <LargeText>250+</LargeText>
                    <smallText>Dishes</smallText>

                </Box>

                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <LargeText>300+</LargeText>
                    <smallText>Trusted clients</smallText>

                </Box>

                <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <LargeText>350+</LargeText>
                    <smallText>Delivery per day</smallText>

                </Box>
                

            </TextFlexBox>

          
        </Container>

    </Box>
  )
}

export default Ambience