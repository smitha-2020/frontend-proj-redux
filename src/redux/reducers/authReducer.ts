import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { authenticUser } from '../../common/common'

const initialState: authenticUser = { id: 0, avatar: "", email: "", password: "", name: "", role: "" };


//get the user session
export const fetchSession = createAsyncThunk(
    "fetchSession",
    async (data: string) => {
        try {
            const response = await axios.get("https://api.escuelajs.co/api/v1/auth/profile", { headers: { Authorization: `Bearer ${data}` } })
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
        clearSession(state) {
            return { id: 0, avatar: "", email: "", password: "", name: "", role: "" }
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchSession.fulfilled, (state, action) => {
            return action.payload;
        })
        .addCase(fetchSession.rejected, (state) => {
            return state
        })
        .addCase(fetchSession.pending, (state) => {
            return state
        })
    }
})

const auhtReducer = authSlice.reducer;
export default auhtReducer;
export const { clearSession } = authSlice.actions;