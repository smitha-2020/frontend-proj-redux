import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';



interface Category {
    id: number,
    name: string,
    image: string
}
interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category
    images: string[]
}
interface ProductDesc {
    title: string,
    price: number,
    description: string,
    categoryId: number,
    images: string[]
}
interface ProductUpdate {
    title: string,
    price: number
}
const initialState: Product[] = [];

export const fetchAllProductsbyCategory = createAsyncThunk(
    "fetchAllProductsbyCategory",
    async (id: number) => {
        try {
            const response: AxiosResponse<any, Product[]> = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)

            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const fetchAllProducts = createAsyncThunk(
    "fetchAllProducts",
    async () => {
        try {
            const response: AxiosResponse<any, Product[]> = await axios.get("https://api.escuelajs.co/api/v1/products")
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const getSingleProduct = createAsyncThunk(
    "getSingleProduct",
    async () => {
        try {
            const response: AxiosResponse<any, Product> = await axios.get("https://api.escuelajs.co/api/v1/products/1")
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const addProduct = createAsyncThunk(
    "addProduct",
    async (product:ProductDesc) => {
        try {
            const response:AxiosResponse<ProductDesc,Product> = await axios.post("https://api.escuelajs.co/api/v1/products/",product)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const updateProduct = createAsyncThunk(
    "updateProduct",
    async (productupdate:ProductUpdate) => {
        try {
            const response:AxiosResponse<ProductUpdate,Product> = await axios.put("https://api.escuelajs.co/api/v1/products/2",productupdate)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
        ascendingOrder: (state, action: PayloadAction<"asc" | "desc">) => {

            if (action.payload === "asc") {
                state.sort((a, b) => a.title.localeCompare(b.title))
            } else {
                state.sort((a, b) => b.title.localeCompare(a.title))
            }
        },
        sortByPrice: (state, action: PayloadAction<"hightolow" | "lowtohigh">) => {

            if (action.payload === "hightolow") {
                state.sort((a, b) => a.price - b.price);
            } else {
                state.sort((a, b) => b.price - a.price)
            }
        }
        , filterCatgories: (state, action) => {
          
        }
    },
    extraReducers: (build) => {
        build.addCase(fetchAllProductsbyCategory.fulfilled, (state, action: PayloadAction<Product[] | Error>) => {
            if (action.payload && "message" in action.payload) {
                return state;
            }
            return action.payload;
        })
        build.addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<Product[] | Error>) => {
            if (action.payload && "message" in action.payload) {
                return state;
            }
            return action.payload
        })
        build.addCase(fetchAllProducts.rejected, (state) => {
            console.log("Rejected")
            return state;
        })
        build.addCase(fetchAllProducts.pending, (state) => {
            console.log("Pending")
            return state;
        })
        build.addCase(getSingleProduct.fulfilled, (state, action: PayloadAction<Product>) => {
            if (action.payload) {
                console.log(action.payload);
            }
        })
        // build.addCase(updateProduct.fulfilled,(state,action)=>{
        //     if(action.payload){
        //         console.log(action.payload);
        //         return state;

        //     }
        // })
    }
});

const productReducer = productSlice.reducer;
export default productReducer;
export const { ascendingOrder, filterCatgories, sortByPrice } = productSlice.actions;
