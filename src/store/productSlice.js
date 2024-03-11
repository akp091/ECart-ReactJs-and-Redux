import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./thunks/fetchProducts";

const productSlice=createSlice({
    name:"products",
    initialState:{
        data:[],
        isLoading:false,
        error: null,
    },
    // reducers:{
    //     getOneProduct(state,action){
    //         const index = state.data.findIndex(product => product.id === action.payload.id);
    //         console.log(index);
            

    //     }
    // },
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, action) => {
          state.isLoading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error;
        });
      }
      
});

export const productReducer=productSlice.reducer;