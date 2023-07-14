import {styled} from '@mui/system'
import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../CustomButton/CustomButton';
import logoImg from "../../assets/img/sea.png"

import MenuIcon from '@mui/icons-material/Menu';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import HomeIcon from '@mui/icons-material/Home';
import ContactsIcon from '@mui/icons-material/Contacts';
import{
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

const Navigate = useNavigate()

const [mobileMenu, setMobileMenu] = useState({left:false})

const toggleDrawer =(anchor,open)=>(event)=>{
    if(event.type == "keydown" && (event.type === "Tab" || event.type === "shift" )){
        return;
    }
    setMobileMenu({...mobileMenu,[anchor]:open})
}

const list = (anchor)=>(
    <Box sx={{
        width:anchor === "top" || anchor === "bottom" ? "auto" : 250
    }}
    role="presentation"
    onClick={toggleDrawer(anchor,false)}
    onKeyDown = {toggleDrawer(anchor,false)}
    >
        <List>
            {
                nav_title.map((item,index)=>(

                    <ListItem key={item.index} disablePadding  onClick={()=>Navigate(item.path)} >
                <ListItemButton>
                    <ListItemIcon>
                        {
                            index === 0 && <HomeIcon />
                        }
                        {
                            index === 1 && <FeaturedPlayListIcon />
                        }
                        {
                            index === 2 && <MiscellaneousServicesIcon />
                        }
                        {
                            index === 3 && <ContactsIcon />
                        }
                    </ListItemIcon>
                    <ListItemText primary={item.display} />
                </ListItemButton>
            </ListItem>
                ))
            }
            
        </List>
    </Box>
)
 


const nav_title =[{
    path:'/',
    display:'Home'
},
{
    path:'/dishes',
    display:'Dishes'
},
{
    path:'/services',
    display:'Services'
},
{
    path:'/about',
    display:'About us'
},
]


const NavBarLinksBox = styled(Box)(({theme})=>({
display:'flex',
alignItems:'center',
justifyContent:'center',
gap:theme.spacing(3),
[theme.breakpoints.down("md")]:{
    display:'none'
}

}));

const NavBarLink = styled(Typography)(()=>({
    fontSize:"15px",
    color:"#4f5361",
    fontweight: "bold",
    cursor:'pointer',
    '&:hover':{
        color:'#fff'
    }
  
    
    }));

    const NavBarLogo = styled("img")(({theme})=>({
      width: "60px",
      height: "30px",
      cursor:"pointer",
      [theme.breakpoints.down("md")]:{
        display:'none'
    }
        
        }));

        const CustomMenuIcon = styled(MenuIcon)(({theme})=>({
            cursor:"pointer",
            display:"none",
            marginRight:theme.spacing(2),
            [theme.breakpoints.down("md")]:{
              display:'block',
          }
              
              }));
        

  return (
    
<Box
sx={{
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
    padding: "40px",
    maxWidth:"auto",
    backgroundColor:"#FED801",
    marginLeft: "0px",
    marginBottom: '-24px',
    }}
>
    
  <Box
  sx={{
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    gap:'2.5rem'
    }}
  >
<Box
sx={{
    display:"flex",
    alignItems:"center",
    }}>


<CustomMenuIcon onClick={toggleDrawer("left",true)} />
<Drawer
    anchor="left"
    open={mobileMenu["left"]}
    onClose={toggleDrawer("left",false)}
>
    {list("left")}
    
</Drawer>

<NavBarLogo src={logoImg} alt="" />
</Box>

        <NavBarLinksBox>
            {
                nav_title.map((item,index)=>(
                    <NavBarLink variant='body2' onClick={()=>Navigate(item.path)}       >
                    {item.display}
                </NavBarLink>
                ))
            }
           
           
        </NavBarLinksBox>


  </Box>
  <Box
  
  sx={{
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    gap:'2.5rem'
    }}
  >
  <NavBarLink variant='body2'>
                Sign up
        </NavBarLink>
        <CustomButton
        backgroundColor= "#0f1B4c"
        color= "#fff"
        buttonText= "Register"
        />
      

  </Box>


</Box>

  )
}

export default Header