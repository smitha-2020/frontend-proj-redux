

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"
import { Product, ProductDesc, ProductDetails } from "../../common/Common"
import axios from "axios"


const initialState: ProductDetails = {
    product: [],
    totalCount: 0
};
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
export const fetchProductsByPagination = createAsyncThunk(
    "fetchProductsByPagination",
    async (currentPage: number) => {
        try {
            const response: AxiosResponse<any, Product[]> = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=12`)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const getSingleProduct = createAsyncThunk(
    "getSingleProduct",
    async (productId: string) => {
        let url = `https://api.escuelajs.co/api/v1/products/${productId}`;
        try {
            const response: AxiosResponse<any, Product> = await axios.get(url)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
export const addProduct = createAsyncThunk(
    "addProduct",
    async (product: ProductDesc) => {
        try {
            const response: AxiosResponse<Product, Product> = await axios.post("https://api.escuelajs.co/api/v1/products/", product)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
// export const updateProduct = createAsyncThunk(
//     "updateProduct",
//     async (productupdate: ProductUpdate) => {
//         try {
//             const response: AxiosResponse<ProductUpdate, Product> = await axios.put("https://api.escuelajs.co/api/v1/products/2", productupdate)
//             return response.data
//         } catch (e) {
//             console.log(e)
//         }
//     }
// )
const productSlice = createSlice({
    name: 'productSlice',
    initialState: initialState,
    reducers: {
        ascendingOrder: (state, action: PayloadAction<"asc" | "desc">) => {
            if (action.payload === "asc") {
                state.product.sort((a, b) => a.title.localeCompare(b.title))
            } else {
                state.product.sort((a, b) => b.title.localeCompare(a.title))
            }
        },
        sortByPrice: (state, action: PayloadAction<"hightolow" | "lowtohigh">) => {
            if (action.payload === "hightolow") {
                state.product.sort((a, b) => a.price - b.price);
            } else {
                state.product.sort((a, b) => b.price - a.price)
            }
        }
    },
    extraReducers: (build) => {

        build.addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<Product[] | Error>) => {
            if (action.payload && "message" in action.payload) {
                return state;
            } else {
                state.product = action.payload;
                state.totalCount = action.payload.length;
            }
        }
        )
            .addCase(fetchAllProducts.rejected, (state) => {
                console.log("Rejected")
                return state;
            })
            .addCase(fetchAllProducts.pending, (state) => {
                console.log("Pending")
                return state;
            })
            .addCase(fetchAllProductsbyCategory.fulfilled, (state, action: PayloadAction<Product[] | Error>) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    state.product = action.payload;
                    state.totalCount = action.payload.length;
                }

            })
            .addCase(fetchAllProductsbyCategory.rejected, (state) => {
                console.log("Rejected")
                return state;
            })
            .addCase(fetchAllProductsbyCategory.pending, (state) => {
                console.log("Pending")
                return state;
            })
            .addCase(fetchProductsByPagination.fulfilled, (state, action: PayloadAction<Product[] | Error>) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    state.product = action.payload;
                    state.totalCount = action.payload.length;
                }

            })
            .addCase(fetchProductsByPagination.rejected, (state) => {
                console.log("Rejected")
                return state;
            })
            .addCase(fetchProductsByPagination.pending, (state) => {
                console.log("Pending")
                return state;
            })
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                }
                state.product = action.payload;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    if (action.payload) {
                        state.product.push(action.payload)
                    }
                }
            })
    }
});

const experimentReducer = productSlice.reducer;
export default experimentReducer;
export const { ascendingOrder, sortByPrice } = productSlice.actions;