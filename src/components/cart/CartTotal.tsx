import React from 'react'

import { Grid } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHook';
import Typography from '@mui/material/Typography';

const CartTotal = () => {

    const cart = useAppSelector(state => { return state.cartReducer; })

    const carttotal = cart.reduce((acc, cartElement) => { return acc + (cartElement.product.price * cartElement.quantity) }, 0)

    return (
        <>
            <Grid container spacing={0} direction="row" alignItems="center" justifyContent="center" style={{ minHeight: '10px', minWidth: '100vw', marginTop: '20px' }}>
                <Grid container spacing={0} alignItems="center" justifyContent="center" style={{ width: '1300px', height: 'auto', minHeight: '100px', marginLeft: "20px", }}>
                    <Grid item xs={8} style={{ fontSize: '10px', textAlign: 'center' }}>
                    </Grid>
                    <Grid item xs={4} display="flex" flexDirection="column" style={{ fontSize: '14px', textAlign: 'center', width: '40px', minHeight: '40px',height:'auto', backgroundColor: '#f2f2f2' }}>
                        <Grid container style={{ padding: '10px' }}  >
                            <Grid item xs={12} display="flex" flexDirection="row" alignItems="center" justifyContent="center"  style={{ padding: '10px' }}  >
                                <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>SubTotal:</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}> ${carttotal}</Typography>
                            </Grid>
                            <Grid item xs={12} display="flex" flexDirection="row" alignItems="center" justifyContent="center"  style={{ padding: '10px' }}  >
                                <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>Shipping:</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}> $60</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item style={{  border: '1px solid lightgray' }}></Grid>
                            </Grid>
                            <Grid item xs={12} display="flex" flexDirection="row" alignItems="center" justifyContent="center"  style={{ padding: '10px' }}  >
                                <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>Total:</Typography>
                                <Typography style={{ fontSize: '12px', fontWeight: 'bold' }}>${carttotal+Number(60)} </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default CartTotal