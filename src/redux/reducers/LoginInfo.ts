import axios from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginData } from '../../common/Common';
import { Inputs, authenticUser, RegisteredUser } from '../../common/Common'

const initialState: RegisteredUser =
{
    access_token: "",
    user: {
        id: 0,
        avatar: "",
        email: "",
        password: "",
        name: "",
        role: ""
    },
    isRegistered: false,
    isLogin: true
}
interface FileInput {
    file: File
}
export const fetchLoginInfo = createAsyncThunk(
    "fetchLoginInfo",
    async (data: LoginData) => {
        try {
            const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", data, { headers: { 'Content-Type': 'application/json' } })
            return response.data;
        } catch (e: any) {
            console.log(e.response.data)
        }
    }
)
export const uploadImagefromForm = createAsyncThunk(
    "uploadImagefromForm",
    async (inputFile: Inputs) => {
        try {
            const responseEmail = await axios.get("https://api.escuelajs.co/api/v1/users")
            const resEmailArr: authenticUser[] = responseEmail.data
            const emailArr = resEmailArr.filter((element) => element.email === inputFile.email)
            if (emailArr.length === 0) {
                const response = await axios.post("https://api.escuelajs.co/api/v1/files/upload", { 'file': inputFile.avatar[0] }, { headers: { 'Content-Type': 'multipart/form-data' } })
                const url: string = response.data.location;
                if (url) {
                    const responseRegister = await axios.post("https://api.escuelajs.co/api/v1/users/", { ...inputFile, avatar: url })
                    return responseRegister.data
                }
            }
        } catch (e: any) {
            console.log(e.config);
        }
    }

)
const loginSlice = createSlice({
    name: "LoginSlice",
    initialState: initialState,
    reducers: {
        setData: (state, action) => {
            localStorage.setItem("accessToken", state.access_token)
            return state;
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchLoginInfo.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                state.isLogin = false;
                //state.access_token = action.payload.access_token
            }else{
                return action.payload;
            }
            return state;
           
        })
            .addCase(fetchLoginInfo.rejected, (state) => {
                return state
            })
            .addCase(fetchLoginInfo.pending, (state) => {
                return state
            })
            .addCase(uploadImagefromForm.fulfilled, (state, action) => {
                state.user = action.payload;
                if (action.payload) {
                    state.isRegistered = true;
                }
            })
            .addCase(uploadImagefromForm.rejected, (state, action) => {
                return state;
            })
            .addCase(uploadImagefromForm.pending, (state, action) => {
                return state;
            })
    }
});

const loginReducer = loginSlice.reducer;
export default loginReducer;

export const { setData } = loginSlice.actions;
