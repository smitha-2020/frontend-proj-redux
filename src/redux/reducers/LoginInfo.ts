import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

interface Login {
    access_token:string 
}
interface LoginData {
    email: string,
    password: string
}
const initialState ={username:"",password:""}
export const fetchLoginInfo = createAsyncThunk(
  "fetchLoginInfo",
  async (data:LoginData) => {
      try {
          const response= await axios.post("https://api.escuelajs.co/api/v1/auth/login",data)
          return response.data
      } catch (e) {
          console.log(e)
      }
  }
)
const loginSlice= createSlice({
    name:"LoginSlice",
    initialState:initialState,
    reducers:{

    },
    extraReducers:(build) => {
        build.addCase(fetchLoginInfo.fulfilled,(state,action) =>{
            if(action.payload && "message" in action.payload){
                return action.payload;
            }
            return action.payload
        })
    }
 });

const  loginReducer = loginSlice.reducer; 
export default loginReducer;
