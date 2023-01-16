import axios, { AxiosResponse } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { CreateUser, IAuthenticUser, IUser } from '../../../types/userType'

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
            const res: AxiosResponse<IAuthenticUser, any> = await axios.post("https://api.escuelajs.co/api/v1/users/", user.user)
            return res.data
        }
        catch (e) {
            console.log(e)
        }
    })
export const updateUser = createAsyncThunk(
    "updateUser", async (user: IUser) => {
        try {
            const userData = user.user;
            console.log("userDara", userData)
            const res: AxiosResponse<IAuthenticUser, any> = await axios.put(`https://api.escuelajs.co/api/v1/users/${user.id}`, userData)
            console.log("res", res.data)
            return res.data
        }
        catch (e) {
            console.log(e)
        }
    })