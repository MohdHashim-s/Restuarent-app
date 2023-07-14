import React from 'react'

import { Box, Typography,  styled } from '@mui/material';
import likeIcon from "../../assets/like.png";
import heartIcon from "../../assets/heart.png";
import shareIcon from "../../assets/share.png"

function Customcard  ({ img, price, item, likes, heart, share })  {
    const DishBox = styled(Box)(({theme}) => ({
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        maxWidth: 350,
        backgroundColor: "#fff",
        margin: theme.spacing(0, 2, 0, 2),
        [theme.breakpoints.down("md")]:{
            margin: theme.spacing(2, 0, 2, 0),
        },
        "&:hover":{
            backgroundColor: "#f5f5f5",
            boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
        },

    }));

    const infoBox = styled(Box)(() => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }));

    const ImgContainer = styled(Box)(() => ({
        width: "100%",
    }))

return(
    <DishBox>
        <ImgContainer>
        <img src={img} alt='house photo' style={{ maxWidth: "100%" }} />
        </ImgContainer>

        <Box sx={{ padding: "1rem"}}>
            <Typography variant='body2' sx={{fontWeight: "700"}}>
                ${price}
            </Typography>
            <Typography variant='body2' sx={{ my:2 }}>
                {item}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <infoBox>
                    <img src={likeIcon} alt='bedroomicon' />
                    <Typography variant='body2' sx={{mt:1}}>
                        {likes}
                    </Typography>
                </infoBox>

                <infoBox>
                    <img src={heartIcon} alt='bedroomicon' />
                    <Typography variant='body2' sx={{mt:1}}>
                        {heart}
                    </Typography>
                </infoBox>

                <infoBox>
                    <img src={shareIcon} alt='bedroomicon' />
                    <Typography variant='body2' sx={{mt:1}}>
                        {share}
                    </Typography>
                </infoBox>


            </Box>

        </Box>

    </DishBox>
)


}

export default Customcard;