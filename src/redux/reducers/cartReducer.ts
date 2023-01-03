import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cart } from '../../common/Common'

const initialState: Cart[] = [];
const cartSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Cart>) {
                return [...state,action.payload]
        },
        removeFromCart(state, action) {
            //console.log(state)
            const newCart = state.filter((cartElement) => { return cartElement.product.id !== action.payload })
            return [...newCart]
        },
        removeCart(state) {
            return [];
        }
    }
})
const cartReducer = cartSlice.reducer;
export default cartReducer;

export const { addToCart, removeFromCart, removeCart } = cartSlice.actions;