import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {list} from "../../api/productApi"


export const fetchProducts = createAsyncThunk(
    "producrs/getProducts", async () =>{
        const {data} = await list();
        return data
    })
const productSlice = createSlice({
    name: "products",
    initialState : {
        value : [],
        loading : true,
    },
    reducers : {},
    extraReducers : {
        [fetchProducts.pending] : (state,action) =>{
            state.loading = true
        },
        [fetchProducts.fulfilled] : (state,action) =>{
            state.value = action.payload;
        }
    }
})
export default productSlice.reducer