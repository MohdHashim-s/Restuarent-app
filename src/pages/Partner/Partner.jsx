import React from 'react'
import {Box, Container, Typography} from "@mui/material";
import { styled } from '@mui/system';
import logoImg from "../../assets/img/sea.png";
import StarsImg from "../../assets/Star.png";
import logosImg from "../../assets/logos.png";


function Partner() {

    const CustomContainer = styled(Container)(({theme}) => ({
        display: "flex",
        
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]:{
            flexDirection: "column",
            textAlign: "space between",
            alignItems: "center",
            marginBottom: theme.spacing(4),
        },
    })
    );
       const CustomBox = styled(Box)(({theme}) => ({
        [theme.breakpoints.down('sm')]:{
            marginBottom: theme.spacing(4),
        },
    })
    );

  return (
   <Box sx={{ mt:10,
    justifyContent: 'space-between'
   }} >
    <CustomContainer>
        <CustomBox>
            <img src={logoImg} alt='logoimg' style={{ maxWidth: "100", height:"40px" }} />
            <Typography
            variant='body2'
            sx={{
                color: "#708589",
                fontSize: "16px",
                fontWeight: "bold",
                mt: 2,
            }}
            >
                More than 45,000 trusts..

            </Typography>
        </CustomBox>
        <Box>
            <img src={StarsImg} alt='star' style={{ maxWidth: "100" }} />
            <Typography
            variant='body2'
            sx={{
                color: "#7D8589",
                fontSize: "16px",
                fontWeight: "bold",
                mt: 2,
            }}
            >
                    5-star rating (2k+ reviews)
            </Typography>
        </Box>
    </CustomContainer>

    <Container sx={{display: "flex", flexDirection: "column"}} >
            <img src={logosImg} alt='logos'/>
    </Container>
   </Box>
  )
}

export default Partner