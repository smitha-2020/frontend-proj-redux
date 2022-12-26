import React from 'react'
import { NavLink } from "react-router-dom";
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
                    <li><NavLink to="/cart"><BsBasketFill/><span>10</span></NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Header