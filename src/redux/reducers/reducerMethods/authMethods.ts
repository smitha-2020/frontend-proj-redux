import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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