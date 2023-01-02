import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

const initialState = "";
//get the user session
export const fetchSession = createAsyncThunk(
    "fetchSession",
    async (data: string) => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", { headers: { Authorization: `Bearer ${data}`}})
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
)
export const authSlice = createSlice({
    name: "authSlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(fetchSession.fulfilled, (state, action) => {
            return action.payload;
        })
        build.addCase(fetchSession.rejected, (state) => {
            return state
        })
        build.addCase(fetchSession.pending, (state) => {
            return state
        })

    }
})

const auhtReducer = authSlice.reducer;
export default auhtReducer;