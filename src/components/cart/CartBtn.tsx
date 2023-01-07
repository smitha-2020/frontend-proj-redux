import React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { Button, Grid } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { removeFromCart, removeCart,increaseQuantity,decreaseQuantity } from '../../redux/reducers/cartReducer';
import { useNavigate } from 'react-router-dom'


const CartBtn = () => {
    const cart = useAppSelector(state => { return state.cartReducer; })
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const clearCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(removeCart())
      }
      const movetoProducts = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/products')
        
      }
  return (
    <>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '10px', minWidth: '100vw', color: 'lightgray', marginTop: '20px' }}>
          <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '1300px', height: 'auto', minHeight: '100px', marginLeft: "20px", color: 'lightgray' }}>
            <Grid item xs={2} style={{ fontSize: '10px', textAlign: 'center' }}>
              <NavLink to=""><Button style={{ backgroundColor: "purple", padding: "10px", color: 'white' }} onClick={(e) =>movetoProducts(e)}> Continue Shopping</Button></NavLink>
            </Grid>
            <Grid item xs={8} style={{ fontSize: '10px', color: 'white', textAlign: 'center' }}>
            </Grid>
            <Grid item xs={2} style={{ fontSize: '10px', textAlign: 'center' }}>
              <NavLink to="" ><Button style={{ backgroundColor: 'red', color: 'white', padding: "10px" }} onClick={(e) =>clearCart(e)}>Clear Cart</Button></NavLink>
            </Grid>
          </Grid>
        </Grid>
    </>
  )
}

export default CartBtn