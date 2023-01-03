import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cart } from '../../common/Common'

const initialState:Cart[] =[];
const cartSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
        addToCart(state,action:PayloadAction<Cart>){
            state.filter((item) => {return item})
           return [...state,action.payload]
        },
        removeFromCart(state,action){
            //console.log(state)
           const newCart = state.filter((cartElement) => {return cartElement.product[0].id !== action.payload})
           return [...newCart]
        }
    }
})
const cartReducer = cartSlice.reducer;
export default cartReducer;

export const { addToCart,removeFromCart } = cartSlice.actions;