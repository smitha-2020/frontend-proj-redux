import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import axios, { AxiosResponse } from 'axios';


// interface Category {
//     id: number,
//     name: string,
//     image: string
// }
type CategoryType = []

const initialState: string[] = [];
export const fetchAllCategories = createAsyncThunk(
    "fetchAllCategories",
    async () => {
        try {
            const res = await axios.get("https://fakestoreapi.com/products/categories")
            //const res = await axios.get("https://api.escuelajs.co/api/v1/categories")
            
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
        build.addCase(fetchAllCategories.fulfilled, (state,action) => {
         return action.payload
            // if (action.payload && "message" in action.payload) {
            //     return state;
            // }
            // return action.payload;
        })
      
        build.addCase(fetchAllCategories.rejected, (state) => {
            return state;
        })
        build.addCase(fetchAllCategories.pending, (state) => {
            return state;
        })
      
    }
})

const categoryReducers = categorySlice.reducer;

export default categoryReducers;

