import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cart } from '../../common/Common'

const initialState: Cart[] = [];
const cartSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Cart>) {

            const existingData = state.filter((cartElement) => {return cartElement.product.id === action.payload.product.id})
            if(existingData.length){
               
                const datanew=state.map((cartElement) => {
                    let quantity
                    if(cartElement.product.id === action.payload.product.id){
                        quantity = cartElement.quantity + action.payload.quantity;
                        return {...cartElement,quantity}
                    }else{
                        return cartElement
                    }
                })
                return {...state,datanew}
            }else{
                return [...state,action.payload]
            }
          
                
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