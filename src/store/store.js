import { configureStore } from "@reduxjs/toolkit";
import { cartReducer,addToCart,removeFromCart,updateCartItems,resetCart } from "./cartSlice";
import { productReducer } from "./productSlice";

const store =configureStore({
    reducer:{
        cart: cartReducer,
        products: productReducer,
    },
});

export {store,addToCart,removeFromCart,updateCartItems,resetCart};
export * from './thunks/fetchProducts';