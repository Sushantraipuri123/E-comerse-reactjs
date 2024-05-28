import { createSlice } from '@reduxjs/toolkit'


// === getting data from local storage that i had stored in my cart page ===
const GetDataFromLocalStorage = () => {
 let localCartData = localStorage.getItem("cart");
 if (!localCartData) {
    return [];
} else {
    return JSON.parse(localCartData);
}
}

const initialState = {
    cart : GetDataFromLocalStorage(),
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