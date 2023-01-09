import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/reduxHook';
import { Grid } from "@mui/material";
import { FaTrashAlt } from "react-icons/fa";
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/reducers/cartReducer';
import { authenticUser } from '../common/Common';
import ToggleButton from '../components/cart/ToggleButton';
import NoData from '../components/NoData';
import CartBtn from '../components/cart/CartBtn';
import CartTotal from '../components/cart/CartTotal';

const Cart = () => {
  const cart = useAppSelector(state => { return state.cartReducer; })
  const dispatch = useAppDispatch();
  const authentication: authenticUser = useAppSelector(state => state.auhtReducer)
  // let cartLocalStorage = JSON.parse((localStorage.getItem('cart')) || '{}');
  // if (cartLocalStorage === null) {
  //   cartLocalStorage = [];
  // }

  // let userCart:<Cart[] = cartLocalStorage.filter((cartInfo:any) => {return cartInfo.userInfo.email === authentication.email})
  // console.log(userCart)
  const cartSize: number = cart.length;
  function deleteCartitem(e: React.MouseEvent<SVGElement, MouseEvent>, id: number): void {
    e.preventDefault();
    dispatch(removeFromCart(id))
  }
  const setIncrease = (id: number) => {
    dispatch(increaseQuantity(id))
  }
  const setDecrease = (id: number) => {
    dispatch(decreaseQuantity(id))
  }
  if (cartSize) {
    return (
      <>
        <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '55vh', height: 'auto', minWidth: '100vw', color: 'lightgray', marginTop: '5px' }}>
          <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '10px', minWidth: '100vw', color: 'lightgray', marginTop: '20px' }}>
            <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '900px', height: 'auto', minHeight: '100px', marginLeft: "20px", backgroundColor: "#f2f2f2", color: 'lightgray' }}>
              <Grid item style={{ fontSize: '10px', textAlign: 'center' }}>
                {authentication.avatar ? `Shopping cart for user, ${authentication.name}` : `user has not logged in..`}
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '5vh', minWidth: '100vw', color: 'lightgray' }}>
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
                <Grid item style={{ width: '1300px', border: '1px solid lightgray' }}></Grid>
              </Grid>
              {cart.map((cartElement:any) => {
                return (
                  <Grid container alignItems="center" justifyContent="center" spacing={0} direction="row" key={cartElement.product.id}>
                    <Grid item xs={1} ></Grid>
                    <Grid item xs={3} style={{ fontSize: '10px' }}>
                      <Grid container alignItems="center" justifyContent="center" spacing={0} direction="row" >
                        <Grid item xs={4}><img src={cartElement.product.category.image} alt={cartElement.product.category.image} width='40px' height='40px' /></Grid>
                        <Grid item xs={8}>  {cartElement.product.title}</Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={3} style={{ fontSize: '10px' }}>
                      <ToggleButton amount={cartElement.quantity} setIncrease={() => { setIncrease(cartElement.product.id) }} setDecrease={() => setDecrease(cartElement.product.id)} />
                    </Grid>
                    <Grid item xs={2} style={{ fontSize: '10px' }}>{cartElement.product.price}</Grid>
                    <Grid item xs={1} style={{ fontSize: '10px' }}>{cartElement.product.price * cartElement.quantity}</Grid>
                    <Grid item xs={1} style={{ fontSize: '12px' }}><FaTrashAlt onClick={(e) => deleteCartitem(e, cartElement.product.id)} /></Grid>
                    <Grid item xs={1} ></Grid>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
        <CartBtn />
        <CartTotal />
      </>
    )
  } else {
    return (<>
      <NoData />
    </>)
  }
}

export default Cart

