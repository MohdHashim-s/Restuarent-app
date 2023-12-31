import React from 'react'
import { Box, Typography, Container, styled } from '@mui/material';

import CustomCard from '../../components/CustomCard/CustomCard';
import { Data } from "../../StaticData/Data"

const Dishes = () => {
const PropertiesTextBox = styled(Box)(({theme}) => ({
  [theme.breakpoints.down("md")]:{
    textAlign: "center",
  },
}));

const DishesBox = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: theme.spacing(5),
  [theme.breakpoints.down("md")]:{
    alignItems: "center",
    flexDirection: "column",
  },
}));



  return (
    <Box sx={{ mt:5, backgroundColor:"#F5FAFE", py: 10 }}>
      <Container>
        <PropertiesTextBox>
          <Typography
          sx={{color: "#000339", fontSize: "35px", fontWeight: "bold", ml:"13px"}}
          >
            Featured Dishes
          </Typography>
          <Typography sx={{color: "#5A6473", fontSize: "16px",mt:1,  ml:"13px"}}>
            Explore variety of south indian dishes!!
          </Typography>
        </PropertiesTextBox>

        <DishesBox>
          {Data.map((foodItem) => (
            <CustomCard
            key={foodItem.id}
            img={foodItem.img}
            price={foodItem.price}
            item={foodItem.item}
            likes={foodItem.likes}
            heart={foodItem.heart}
            share={foodItem.share}
            />
          ) )}
        </DishesBox>

      </Container>

    </Box>
   
  );
};

export default Dishes