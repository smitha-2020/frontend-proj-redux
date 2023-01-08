import React from 'react'
import { AppBar, Box, Button, Container, Grid, Toolbar } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
             <AppBar position="static" sx={{ backgroundColor: 'white', color: 'lightgray' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                      
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}} flexDirection="row" justifyContent="center" >
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink to="/" style={{ color: 'gray' }}>Home</NavLink>
                            </Button>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink to="/products" style={{ color: 'gray' }}>Products</NavLink>
                            </Button>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink to="/products" style={{ color: 'gray' }}><LinkedInIcon/></NavLink>
                            </Button>
                            {/* <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                {authentication.avatar ? <FaSignOutAlt style={{ color: 'gray' }} onClick={(e) => deleteSession(e)} /> : ""}
                            </Button> */}
                            {/* <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                {authentication.avatar ? "" : <NavLink to="/login"><FaSignInAlt /></NavLink>}
                            </Button>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink style={{ color: 'gray' }} to="/register"><FaUserAlt /></NavLink>
                            </Button>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink to="/cart" style={{ color: 'gray' }}><BsBasketFill style={{ fill: 'gray' }} /><span className="span-cart">{carttotal}</span></NavLink>
                            </Button> */}

                        </Box>

                       
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Footer