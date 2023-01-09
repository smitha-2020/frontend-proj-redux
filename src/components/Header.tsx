import React, { useContext } from 'react'

import { NavLink, useNavigate } from "react-router-dom";
import { BsBasketFill } from "react-icons/bs";
import { FaSignInAlt, FaUserAlt, FaSignOutAlt } from "react-icons/fa";
import { Box, AppBar, Toolbar, Typography, Switch, Menu, Container, Avatar, Button, Tooltip, MenuItem } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { authenticUser } from '../common/Common';
import { clearSession } from '../redux/reducers/authReducer';

import { FcSignature } from "react-icons/fc";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const Header = () => {
    const navigate = useNavigate();
    const authentication: authenticUser = useAppSelector(state => state.auhtReducer)
    const cart = useAppSelector(state => { return state.cartReducer; })
    const carttotal = cart.reduce((acc, cartElement) => { return acc + cartElement.quantity }, 0)
    const dispatch = useAppDispatch();

    const deleteSession = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        console.log("Logging out")
        localStorage.setItem("access_token", "")
        dispatch(clearSession())
        navigate("/login")
    }
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'lightgray' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                fontSize: '45px',

                            }}
                        >
                            <FcSignature className="whitefill" />
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            </Menu>
                        </Box>
                        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink to="/" className="navlinkcolor">Home</NavLink>
                            </Button>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink to="/products" className="navlinkcolor">Products</NavLink>
                            </Button>
                            {/* <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                {authentication.avatar ? <FaSignOutAlt style={{ color: 'gray' }} onClick={(e) => deleteSession(e)} /> : ""}
                            </Button> */}
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                {authentication.avatar ? "" : <NavLink to="/login"><FaSignInAlt /></NavLink>}
                            </Button>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink className="navlinkcolor" to="/register"><FaUserAlt /></NavLink>
                            </Button>
                            <Button sx={{ my: 2, color: 'gray', display: 'block' }}>
                                <NavLink to="/cart" className="navlinkcolor"><BsBasketFill className="grayfill" /><span>{carttotal}</span></NavLink>
                            </Button>

                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    {authentication.avatar ? <Avatar alt="Remy Sharp" src={authentication.avatar} /> : ""}
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><NavLink className="navlinkfont" to="/profile">Profile</NavLink> </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center"><NavLink className="navlinkfont" to="/cart">Cart</NavLink> </Typography>
                                </MenuItem>
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center" onClick={(e) => deleteSession(e)} className="navlinkfont">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Box>
                            <Switch {...label} size="small" />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header