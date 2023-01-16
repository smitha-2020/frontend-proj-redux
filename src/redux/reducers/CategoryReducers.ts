import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ICategory, IProduct } from '../../types/productType';

const initialState: ICategory[] = [];
export const fetchAllCategories = createAsyncThunk(
    "fetchAllCategories",
    async () => {
        try {
            const res: AxiosResponse<ICategory[], any> = await axios.get("https://api.escuelajs.co/api/v1/categories")
            return res.data;
        } catch (e) {
            const error = e as AxiosError
            return error
        }
    }
)
export const getSingleCategory = createAsyncThunk(
    "getSingleCategory",
    async (id: string) => {
        try {
            const res: AxiosResponse<ICategory[], any> = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`);
            return res.data;
        }
        catch (e) {
            const error = e as AxiosError
            return error
        }
    })
export const createCategory = createAsyncThunk(
    "createCategory",
    async (category: ICategory) => {
        try {
            const res: AxiosResponse<ICategory, any> = await axios.post('https://api.escuelajs.co/api/v1/categories/', category)
            return res.data;
        }
        catch (e) {
            const error = e as AxiosError
            return error
        }
    })
export const updateCategory = createAsyncThunk(
    "updateCategory",
    async (data: ICategory) => {
        const { id, ...filteredCategory } = data
        try {
            const res: AxiosResponse<ICategory, any> = await axios.put(`https://api.escuelajs.co/api/v1/categories/${id}`, filteredCategory)
            console.log(res.data)
            return res.data;
        }
        catch (e) {
            const error = e as AxiosError
            return error
        }
    }
)
export const deleteCategory = createAsyncThunk(
    "deleteCategory",
    async (id: number) => {
        const res: AxiosResponse<ICategory, any> = await axios.delete(`https://api.escuelajs.co/api/v1/categories/${id}`)
        const result = res.data ? id : 0
        return result
    }
)
// export const getProductsByCategory = createAsyncThunk(
//     "getProductsByCategory",
//     async (id: number) => {
//         const res: AxiosResponse<IProduct[], any> = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
//         return res.data;
//     }
// )
const categorySlice = createSlice({
    name: "categorySlice",
    initialState: initialState,
    reducers: {
    },
    extraReducers: (build) => {
        build.addCase(fetchAllCategories.fulfilled, (state, action) => {
            if (action.payload instanceof AxiosError) {
                return state;
            }
            return action.payload
        })
            .addCase(fetchAllCategories.rejected, (state) => {
                return state;
            })
            .addCase(fetchAllCategories.pending, (state) => {
                return state;
            })
            .addCase(getSingleCategory.fulfilled, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    return state;
                } else {
                    if (action.payload && "image" in action.payload) {
                        return action.payload;
                    } else {
                        return state;
                    }
                }
            })
            .addCase(getSingleCategory.pending, (state) => {
                return state
            })
            .addCase(getSingleCategory.rejected, (state) => {
                return state
            })
            .addCase(createCategory.fulfilled, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    return state;
                } else {
                    if (action.payload && "name" in action.payload) {
                        return [...state, action.payload]
                    } else {
                        return state;
                    }
                }
            })
            .addCase(createCategory.pending, (state) => {
                return state
            })
            .addCase(createCategory.rejected, (state) => {
                return state
            })
            .addCase(updateCategory.fulfilled, (state, action) => {
                if (action.payload instanceof AxiosError) {
                    return state;
                } else {
                    // if (action.payload && "id" in action.payload) {
                    const returnedData = action.payload;
                    return state.map(category => {
                        return category.id === returnedData.id ? returnedData : category
                    }
                    )
                    //console.log(action.payload)
                    // console.log("updateCategory" + [updateCategory])
                    // //console.log(updateCategory)
                    // return [...state, updateCategory]
                }
                //}
            })
            .addCase(updateCategory.pending, (state) => {
                return state
            })
            .addCase(updateCategory.rejected, (state) => {
                return state
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                const deletedData = [...state]
                const result = deletedData.filter(category => { return category.id === action.payload })
                return [...result]
            })
            .addCase(deleteCategory.pending, (state) => {
                return state
            })
            .addCase(deleteCategory.rejected, (state) => {
                return state
            })
        // .addCase(getProductsByCategory.fulfilled, (state, action) => {
        //     if (action.payload && "message" in action.payload) {
        //         return state;
        //     }
        //     else {
        //         const productList = action.payload;
        //         productList.map((product) => {
        //             return [...state, product]
        //         })
        //     }
        // })
    }
})

const categoryReducers = categorySlice.reducer;

export default categoryReducers;

