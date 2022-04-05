import { createSlice } from "@reduxjs/toolkit";

const cartSilce = createSlice({
    name : "cart",
    initialState :{
        items : [],
        total :0
    },
    reducers : {
        addItem : (state ,action) =>{
            const newItem = action.payload;
            const existItem = state.items.find((item) => item._id === newItem._id);
            if(!existItem) {
                state.items.push(newItem)
            } else {
                existItem.quantity += existItem.quantity
            }
        },
        removeItem : (state, action) =>{
            state.items = state.item.filter(item =>item._id !== action.payload._id)
        },
    }
})
export default cartSilce.reducer