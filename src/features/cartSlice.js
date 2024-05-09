import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart : [

]
  }

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers :{
        addToCart : (state, action )=>{
            const item = action.payload;
            state.cart.push(item);
        }
    }
}) 


export const {addToCart} = cartSlice.actions

export default cartSlice.reducer