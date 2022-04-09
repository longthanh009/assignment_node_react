import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin, signup } from "../../api/authApi";
import { userType } from "../../types/userType";
export const login = createAsyncThunk(
    "auth/login", async (formData: userType) => {
        const {data}= await signin(formData);
        return data
    });
const authSlice = createSlice({
    name: "auth",
    initialState: {
        inforUser: [],
        loading: false,
        message : ""
    },
    reducers: {},
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.inforUser = action.payload;
            // console.log(state.inforUser);
        },[login.rejected]: (state, action) => {
            state.loading = false;
        }
    }
})
export default authSlice.reducer