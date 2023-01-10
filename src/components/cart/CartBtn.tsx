import React from 'react'

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import { Button, Grid } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { removeFromCart, removeCart,increaseQuantity,decreaseQuantity } from '../../redux/reducers/cartReducer';
import { useNavigate } from 'react-router-dom'
import { authenticUser } from '../../common/common';


const CartBtn = () => {
    const cart = useAppSelector(state => { return state.cartReducer; })
    const authentication: authenticUser = useAppSelector(state => state.auhtReducer)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const clearCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        dispatch(removeCart(authentication.id))
      }
      const movetoProducts = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/products')
        
      }
  return (
    <>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" sx={{ minHeight: '10px', minWidth: '100vw', color: 'text.primary',backgroundColor:'primary.main' }}>
          <Grid container spacing={0} alignItems="center" justifyContent="center" sx={{ width: '1300px', height: 'auto', minHeight: '100px', marginLeft: "20px", color: 'lightgray' }}>
            <Grid item xs={2} sx={{ fontSize: '10px', textAlign: 'center' }}>
              <NavLink to=""><Button sx={{ backgroundColor: "purple", padding: "10px", color: 'white' }} onClick={(e) =>movetoProducts(e)}> Continue Shopping</Button></NavLink>
            </Grid>
            <Grid item xs={8} sx={{ fontSize: '10px', color: 'white', textAlign: 'center' }}>
            </Grid>
            <Grid item xs={2} sx={{ fontSize: '10px', textAlign: 'center' }}>
              <NavLink to="" ><Button sx={{ backgroundColor: 'red', color: 'white', padding: "10px" }} onClick={(e) =>clearCart(e)}>Clear Cart</Button></NavLink>
            </Grid>
          </Grid>
        </Grid>
    </>
  )
}

export default CartBtn