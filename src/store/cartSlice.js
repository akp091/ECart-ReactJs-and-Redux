import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart(state,action){
            state.push(action.payload);
        },

        updateCartItems(state, action) {
            const index = state.findIndex(cartItem => cartItem.id === action.payload.id);
            console.log(index);
            state[index].quantity=action.payload.quantity;
            
          },

        removeFromCart(state,action){
           return state.filter(cartItem => cartItem.id !== action.payload)

        },

        resetCart(state,action){
            return [];
        }
    }
});

export const {addToCart,removeFromCart,updateCartItems,resetCart}=cartSlice.actions; 
export const cartReducer= cartSlice.reducer;