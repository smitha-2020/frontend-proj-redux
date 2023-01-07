import React, { useState } from 'react'

import { Button } from "@mui/material";
import { Product, Cart } from '../../common/Common';
import ToggleButton from './ToggleButton';
import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { addToCart } from '../../redux/reducers/cartReducer';

const AddToCart = ({ products,id }: { products: Product,id:string }) => {
    const ButtonNew = styled(Button)({
        backgroundColor: "darkgray",
        color: "white",
        marginTop: "20px"
    });
    const cart = useAppSelector(state => { return state.cartReducer; })
    const dispatch = useAppDispatch();
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
    const data: Cart = {
        quantity: amount,
        product: products
    }
    const addCart = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        dispatch(addToCart({ ...data }))
    }
    return (
        <>
            <ToggleButton amount={amount} setIncrease={setIncrease} setDecrease={setDecrease} />
            <NavLink to="/cart" onClick={(e) => { addCart(e) }}>
                <Button variant='contained' style={{backgroundColor: "darkgray",color: "white",marginTop: "20px"}}>Add To Cart</Button>
            </NavLink>
        </>
    )
}

export default AddToCart