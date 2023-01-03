import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { Grid, Typography } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart } from '../redux/reducers/cartReducer';
import { authenticUser } from '../common/Common';
import ToggleButton from '../components/ToggleButton';


const Cart = () => {

  const cart = useAppSelector(state => { return state.cartReducer; })
  const dispatch = useAppDispatch();
  const authentication: authenticUser = useAppSelector(state => state.auhtReducer)
  console.log(cart)
  const cartSize: number = cart.length;

  function deleteCartitem(e: React.MouseEvent<SVGElement, MouseEvent>, id: number): void {
    e.preventDefault();
    dispatch(removeFromCart(id))
  }
  const setIncrease = () => {
    //amount < stock ? setAmount(amount + 1) : setAmount(stock)
  }
  const setDecrease = () => {
    //amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  if (cartSize) {
    return (
      <>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '10px', minWidth: '100vw', color: 'lightgray', marginTop: '20px' }}>
          <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '100px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
            <Grid item style={{ fontSize: '10px', textAlign: 'center' }}>
              {authentication.avatar ? `shopping cart for user ${authentication.name}` : `user has not logged in..`}
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '30vh', minWidth: '100vw', color: 'lightgray' }}>
          <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '1300px', height: 'auto', minHeight: '200px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>

            <Grid container spacing={0} direction="row" style={{ padding: '10px', color: 'lightgray' }}>
              <Grid item xs={1}></Grid>
              <Grid item xs={3} style={{ fontSize: '12px' }}>Title</Grid>
              <Grid item xs={3} style={{ fontSize: '12px' }}>Quantity</Grid>
              <Grid item xs={2} style={{ fontSize: '12px' }}>Price</Grid>
              <Grid item xs={1} style={{ fontSize: '12px' }}>Subtotal</Grid>
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
                  <Grid item xs={3} style={{ fontSize: '10px' }}>
                    <Grid container alignItems="center" justifyContent="center" spacing={0} direction="row" >
                      <Grid item xs={4}><img src={cartElement.product[0].category.image} alt={cartElement.product[0].category.image} width='40px' height='40px' /></Grid>
                      <Grid item xs={8}>  {cartElement.product[0].title}</Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={3} style={{ fontSize: '10px' }}>

                    <ToggleButton amount={cartElement.quantity} setIncrease={ setIncrease} setDecrease={setDecrease } />

                  </Grid>
                  <Grid item xs={2} style={{ fontSize: '10px' }}>{cartElement.product[0].price}</Grid>
                  <Grid item xs={1} style={{ fontSize: '10px' }}>{cartElement.product[0].price * cartElement.quantity}</Grid>
                  <Grid item xs={1} style={{ fontSize: '12px' }}><FaTrashAlt onClick={(e) => deleteCartitem(e, cartElement.product[0].id)} /></Grid>
                  <Grid item xs={1} ></Grid>
                </Grid>
              )
            })}
          </Grid>

        </Grid>
      </>
    )
  } else {
    return (<>
      <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '80vh', minWidth: '100vw', color: 'lightgray' }}>
        <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '200px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
          <Grid item style={{ width: '900px', textAlign: 'center' }} >
            No items found
          </Grid>
        </Grid>
      </Grid>
    </>)
  }
}

export default Cart

