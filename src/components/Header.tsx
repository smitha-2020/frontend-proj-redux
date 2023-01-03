import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { BsBasketFill } from "react-icons/bs";
import Grid from '@mui/material/Grid';
import styled from '@emotion/styled';
import { FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { Box, Stack, AppBar, Toolbar, Typography, useTheme, Tabs, Tab, Avatar } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { useAppSelector } from '../hooks/reduxHook';
import { authenticUser } from '../common/Common';


const Header = () => {

    const authentication:authenticUser = useAppSelector(state => state.auhtReducer)
    const cart = useAppSelector(state => { return state.cartReducer; })
    const carttotal = cart.reduce((acc, cartElement) => { return acc + cartElement.quantity }, 0)
    console.log(carttotal)
    const AnatherAppBar = styled(AppBar)({
        backgroundColor: 'white', color: "#8c8c8c"
    })
    const NewToolBar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"

    })
    const Menus = styled(Box)({
        display: "flex",
        gap: "20px"
    })

    useEffect(() => {
        console.log("Hi")
    }, [])
    return (
        <>

            {/* NabBar specific style */}
            {/* <AppBar>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={3}>
                            <Typography><LocalMallIcon /></Typography>
                        </Grid>
                        <Grid item xs={6} spacing={2}>
                            <Tabs>
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/products">Products</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                                <NavLink to="/cart"><BsBasketFill /></NavLink>
                            </Tabs>
                        </Grid>
                        <Grid item xs={3}></Grid>
                    </Grid>
                </Toolbar>
            </AppBar> */}


            <AnatherAppBar position="static">
                <NewToolBar>
                    <Typography variant="h6">
                        SMART BUY
                    </Typography>
                    <Menus>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        {authentication.avatar?<NavLink to="/profile"><Avatar alt="Remy Sharp" src={authentication.avatar} /></NavLink>:<NavLink to="/login"><FaSignInAlt /></NavLink>}
                        <NavLink to="/register"><FaUserAlt /></NavLink>
                        <NavLink to="/cart"><BsBasketFill /><span className="span-cart">{carttotal}</span></NavLink>
                    </Menus>
                </NewToolBar>
            </AnatherAppBar>


            {/* <nav>
                <span>Platzi</span>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/cart"><BsBasketFill/></NavLink></li>
                    <li><Button  variant="contained">Login</Button></li>
                </ul>
            </nav> */}
            {/* <AnatherButton>Text Hello</AnatherButton> */}
            {/* <Box>
            <Stack direction="row" spacing={2}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/cart"><BsBasketFill /></NavLink>
            </Stack>


           </Box> */}
            {/* <Grid container spacing={100} style={{padding:12}}>
                <Grid item md={6} >
               
                </Grid>
                <Grid item md={6}>
                    <Grid container justifyContent="center" alignItems="center" textAlign="center">
                        <Grid item style={{width:90,height:50}}>
                           <NavLink to="/">Home</NavLink>
                        </Grid>
                        <Grid item style={{width:90,height:50}}>
                            <NavLink to="/about">About</NavLink>
                        </Grid>
                        <Grid item style={{width:90,height:50}}>
                            <NavLink to="/products">Products</NavLink>
                        </Grid>
                        <Grid item style={{width:90,height:50}}>
                            <NavLink to="/cart"><BsBasketFill /></NavLink>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid> */}
        </>
    )
}

export default Header