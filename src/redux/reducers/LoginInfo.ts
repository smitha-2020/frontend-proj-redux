import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'


interface LoginData {
    email: string,
    password: string
}
const initialState = {
    access_token: "" 
}
export const fetchLoginInfo = createAsyncThunk(
    "fetchLoginInfo",
    async (data: LoginData) => {
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", data, { headers: { 'Content-Type': 'application/json' } })
            return response.data;
        } catch (e) {
            console.log(e)
        }
    }
)
const loginSlice = createSlice({
    name: "LoginSlice",
    initialState: initialState,
    reducers: {
        setData:(state, action) => {
            localStorage.setItem("accessToken", state.access_token)
            return state;
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchLoginInfo.fulfilled, (state, action) => {
            return action.payload;
        })
        build.addCase(fetchLoginInfo.rejected, (state) => {
            return state
        })
        build.addCase(fetchLoginInfo.pending, (state) => {
   
            return state
        })
    }
});

const loginReducer = loginSlice.reducer;
export default loginReducer;

export const { setData } = loginSlice.actions;
