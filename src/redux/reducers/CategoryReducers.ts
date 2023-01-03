import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import axios, { AxiosResponse } from 'axios';
import { Categorys } from '../../common/Common';



type CategoryType = []

const initialState: Categorys[] = [];
export const fetchAllCategories = createAsyncThunk(
    "fetchAllCategories",
    async () => {
        try {
            //const res = await axios.get("https://fakestoreapi.com/products/categories")
            const res = await axios.get("https://api.escuelajs.co/api/v1/categories")
            return res.data;
        } catch (e) {
            console.log(e)
        }
    }
)
const categorySlice = createSlice({
    name: "categorySlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(fetchAllCategories.fulfilled, (state, action) => {
            return action.payload
            // if (action.payload && "message" in action.payload) {
            //     return state;
            // }
            // return action.payload;
        })

        .addCase(fetchAllCategories.rejected, (state) => {
            return state;
        })
        .addCase(fetchAllCategories.pending, (state) => {
            return state;
        })

    }
})

const categoryReducers = categorySlice.reducer;

export default categoryReducers;

