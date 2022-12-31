import React, { useState } from 'react'

import { Button } from "@mui/material";
import { Product } from '../common/Common';
import ToggleButton from './ToggleButton';
import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';


const AddToCart = ({ products }: { products: Product[] }) => {
    const ButtonNew = styled(Button)({
        backgroundColor: "darkgray",
        color: "white",
        marginTop: "20px"
    });
    const stock = 5;
    const [amount, setAmount] = useState(1)
    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }
    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const CartBtn = styled(Button)({
        marginTop: "20px",
        backgroundColor: "lightblue",
        color: "gray"
    });
    return (
        <>
            <ToggleButton amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
            <NavLink to="/cart">
                <ButtonNew variant='contained'>Add To Cart</ButtonNew>
            </NavLink>
        </>
    )
}

export default AddToCart