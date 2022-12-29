import React from 'react'
import { NavLink } from "react-router-dom";
import Button from '@mui/material/Button';
import { BsBasketFill } from "react-icons/bs";

const Header = () => {
    return (
        <>
            <nav>
                <span>Platzi</span>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/products">Products</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/cart"><BsBasketFill/></NavLink></li>
                    <li><Button  variant="contained">Login</Button></li>
                </ul>
            </nav>
        </>
    )
}

export default Header