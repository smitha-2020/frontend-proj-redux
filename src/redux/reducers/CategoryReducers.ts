import { createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios';
import { ICategory } from '../../types/productType';
import { fetchAllCategories, getSingleCategory, createCategory, updateCategory,deleteCategory } from './reducerMethods/categoryMethods';

const initialState: ICategory[] = [];

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
                    const returnedData = action.payload;
                    return state.map(category => {
                        return category.id === returnedData.id ? returnedData : category
                    }
                    )
                }
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
                return result
            })
            .addCase(deleteCategory.pending, (state) => {
                return state
            })
            .addCase(deleteCategory.rejected, (state) => {
                return state
            })
    }
})

const categoryReducers = categorySlice.reducer;

export default categoryReducers;

