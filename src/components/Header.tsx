import React from 'react'

import { NavLink } from "react-router-dom";
import { BsBasketFill } from "react-icons/bs";
import styled from '@emotion/styled';
import { FaSignInAlt, FaUserAlt,FaSignOutAlt } from "react-icons/fa";
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { authenticUser } from '../common/Common';
import { clearSession } from '../redux/reducers/authReducer';


const Header = () => {
    const authentication:authenticUser = useAppSelector(state => state.auhtReducer)
    const cart = useAppSelector(state => { return state.cartReducer; })
    const carttotal = cart.reduce((acc, cartElement) => { return acc + cartElement.quantity }, 0)
    const dispatch = useAppDispatch();
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
    const deleteSession = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        console.log("Logging out")
        localStorage.setItem("accessToken", "")
        dispatch(clearSession())
    } 
    return (
        <>
            <AnatherAppBar position="static">
                <NewToolBar>
                    <Typography variant="h6">
                        SMART BUY
                    </Typography>
                    <Menus>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/products">Products</NavLink>
                        {/* <Avatar alt="Remy Sharp" src={authentication.avatar} /> */}
                        {authentication.avatar?<NavLink style={{color:'coral'}} to="/profile">{`welcome, ${authentication.name} `}</NavLink>:<NavLink to="/login"><FaSignInAlt /></NavLink>}
                        {authentication.avatar?<FaSignOutAlt onClick={(e) => deleteSession(e)}/>:""}
                        <NavLink to="/cart"><BsBasketFill /><span className="span-cart">{carttotal}</span></NavLink>
                    </Menus>
                </NewToolBar>
            </AnatherAppBar>
        </>
    )
}

export default Header