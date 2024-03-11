import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchProducts=createAsyncThunk('fetch/products',async ()=>{
    const response= await axios.get("https://fakestoreapi.com/products");
    return response.data;
});

export {fetchProducts};