import axios, { AxiosResponse } from 'axios'
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CreateUser, LoginData, User } from '../../common/common';
import { Inputs, authenticUser, RegisteredUser } from '../../common/common'

const initialState: authenticUser[] = []
export const getAllUsers = createAsyncThunk(
    "getAllUsers", async () => {
        try {
            const res = await axios.get("https://api.escuelajs.co/api/v1/users")
            return res.data
        }
        catch (e) {
            console.log(e)
        }
    })
export const getUser = createAsyncThunk(
    "getUser", async (id: number) => {
        try {
            const res = await axios.get(`https://api.escuelajs.co/api/v1/users/${id}`)
            return res.data
        }
        catch (e) {
            console.log(e)
        }
    })
export const createUser = createAsyncThunk(
    "createUser", async (user: CreateUser) => {
        try {
            const res: AxiosResponse<authenticUser, any> = await axios.post("https://api.escuelajs.co/api/v1/users/", user.user)
            return res.data
        }
        catch (e) {
            console.log(e)
        }
    })
export const updateUser = createAsyncThunk(
    "updateUser", async (user: User) => {
        try {
            const {id,role,...filteredUser} = user.user;
            const res: AxiosResponse<authenticUser, any> = await axios.put(`https://api.escuelajs.co/api/v1/users/${id}`, filteredUser)
            return res.data
        }
        catch (e) {
            console.log(e)
        }
    })
export const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getAllUsers.fulfilled, (state, action) => {
            if (action.payload && "message" in action.payload) {
                return state;
            } else {
                if (action.payload) {
                    return action.payload;
                }
            }
            return state;
        })
            .addCase(getAllUsers.pending, (state, action) => {
                return state;
            })
            .addCase(getAllUsers.rejected, (state, action) => {
                return state;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    if (action.payload) {
                        return action.payload;
                    }
                }
                return state;
            })
            .addCase(getUser.pending, (state, action) => {
                return state;
            })
            .addCase(getUser.rejected, (state, action) => {
                return state;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    if (action.payload) {
                        return [action.payload];
                    }
                }
                return state;
            })
            .addCase(createUser.pending, (state, action) => {
                return state;
            })
            .addCase(createUser.rejected, (state, action) => {
                return state;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    const modifyState = [...state]
                    const result = modifyState.map(user => user.id === action.payload?.id? action.payload : user)
                    return [...result]
                }
                return state;
            })
            .addCase(updateUser.pending, (state, action) => {
                return state;
            })
            .addCase(updateUser.rejected, (state, action) => {
                return state;
            })
    }
})

const userReducer = userSlice.reducer;
export default userReducer;