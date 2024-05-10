import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart : [],
    totalQuantity: 0,
  }

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers :{
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cart.find(item => item.id === newItem.id);
        
            if (existingItem) {
               
                alert(`${newItem.title} is already in the cart.`);
            } else {
               
                state.cart.push(newItem);
                
                state.totalQuantity++;
                alert("One item added to cart")
            }
        },
        
        removeFromCart: (state, action) => {
            
            state.cart = state.cart.filter(item => item.id !== action.payload);
        },
    }
}) 


export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer