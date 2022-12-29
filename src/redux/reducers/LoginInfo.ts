import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface Login {
    access_token: string
}
interface LoginData {
    email: string,
    password: string
}
//const initialState ={username:"",password:""}
const initialState: Login = { "access_token": "" }
export const fetchLoginInfo = createAsyncThunk(
    "fetchLoginInfo",
    async (data: LoginData) => {
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", data)
            return response.data.access_token;
        } catch (e) {
            console.log(e)
        }
    }
)
const loginSlice = createSlice({
    name: "LoginSlice",
    initialState: initialState,
    reducers: {

    },
    extraReducers: (build) => {
        build.addCase(fetchLoginInfo.fulfilled, (state, action) => {
            return action.payload;
        })
        build.addCase(fetchLoginInfo.rejected, (state) => {
            // if(action.payload && "message" in action.payload){
            //     return action.payload;
            // }
            console.log("Rejected")
            return state
        })
        build.addCase(fetchLoginInfo.pending, (state) => {
            // if(action.payload && "message" in action.payload){
            //     return action.payload;
            // }
            console.log("Pending")
            return state
        })
    }
});

const loginReducer = loginSlice.reducer;
export default loginReducer;

// export const { getLoginSession } = loginSlice.actions;
