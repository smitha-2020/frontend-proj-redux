import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { Grid } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from '../redux/reducers/cartReducer';


const Cart = () => {
  const cart = useAppSelector(state => { return state.cartReducer; })
  const dispatch = useAppDispatch();
  console.log(cart)

  function deleteCartitem(e: React.MouseEvent<SVGElement, MouseEvent>,id:number): void {
    e.preventDefault();
    dispatch(removeFromCart(id))
  }
  return (
    <>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '80vh', minWidth: '100vw', color: 'lightgray' }}>
        <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '200px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
          <Grid container spacing={0} direction="row" style={{ padding: '10px', color: 'lightgray' }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={4} style={{ fontSize: '12px' }}>Title</Grid>
            <Grid item xs={1} style={{ fontSize: '12px' }}>Quantity</Grid>
            <Grid item xs={2} style={{ fontSize: '12px' }}>Price</Grid>
            <Grid item xs={2} style={{ fontSize: '12px' }}>Subtotal</Grid>
            <Grid item xs={1} style={{ fontSize: '12px' }}>Remove</Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <Grid container>
            <Grid item style={{ width: '900px', border: '1px solid lightgray' }}></Grid>
          </Grid>
          {cart.map((cartElement) => {
            return (
              <Grid container alignItems="center" justifyContent="center" spacing={0} direction="row" key={cartElement.product[0].id}>
                <Grid item xs={1} ></Grid>
                <Grid item xs={4} style={{ fontSize: '10px' }}>
                  <Grid container alignItems="center" justifyContent="center" spacing={0} direction="row" >
                    <Grid item xs={4}><img src={cartElement.product[0].image} alt={cartElement.product[0].image} width='40px' height='40px' /></Grid>
                    <Grid item xs={8}>  {cartElement.product[0].title}</Grid>
                  </Grid>
                </Grid>
                <Grid item xs={1} style={{ fontSize: '10px' }}>
                  {/* Add Toggle Button */}
                  {cartElement.quantity}
                </Grid>
                <Grid item xs={2} style={{ fontSize: '10px' }}>{cartElement.product[0].price}</Grid>
                <Grid item xs={2} style={{ fontSize: '10px' }}>{cartElement.product[0].price * cartElement.quantity}</Grid>
                <Grid item xs={1} style={{ fontSize: '12px' }}><FaTrashAlt onClick={(e) => deleteCartitem(e,cartElement.product[0].id)}/></Grid>
                <Grid item xs={1} ></Grid>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default Cart

