import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError, AxiosResponse } from "axios"
import { Product, ProductDesc, ProductDetails, ProductModify } from "../../common/common"
import axios from "axios"
import Products from "../../Pages/Products";
import { S } from "msw/lib/SetupServerApi-70cc71a7";

const initialState: ProductDetails = {
    product: [],
    totalCount: 0,
    isDone: false
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
export const addingProduct = createAsyncThunk(
    "addingProduct",
    async (product: ProductDesc) => {
        try {
            console.log(product)
            //const responseImg = await axios.post("https://api.escuelajs.co/api/v1/files/upload", { 'file': product.imagestr[0] }, { headers: { 'Content-Type': 'multipart/form-data' } })
            // if (responseImg.data) {
            //const response: AxiosResponse<Product, Product> = await axios.post("https://api.escuelajs.co/api/v1/products/", product)
            const response: AxiosResponse<Product, any> = await axios.post("https://api.escuelajs.co/api/v1/products", product)
            return response.data
        }
        catch (e) {
            console.log(e)
        }
    }
)
export const deletingProduct = createAsyncThunk(
    "deletingProduct",
    async (id: number) => {
        try {
            const response = await axios.delete(`https://api.escuelajs.co/api/v1/products/${id}`)
            const dataReturn = response.data ? id : 0;
            return dataReturn;
        }
        catch (e) {
            console.log(e)
        }
    }
)
export const modifyProduct = createAsyncThunk(
    "modifyProduct",
    async ({ id, updateProduct }: ProductModify) => {
        try {
            const response: AxiosResponse<Product, any> = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, updateProduct)
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
)
// export const modifyProduct = createAsyncThunk(
//     "modifyProduct",
//     async (data: ProductOpt) => {
//         const { id, ...updateProduct } = data
//         const newData = {id:id,updateProduct:updateProduct}
//         try {
//             const response: AxiosResponse<Product, any> = await axios.put(`https://api.escuelajs.co/api/v1/products/${id}`, newData)
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
        build.addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            if (action.payload && "message" in action.payload) {
                return state;
            } else {
                if (!action.payload) {
                    return state;
                }
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
                    if (action.payload) {
                        const getCategory = action.payload;
                        console.log({ ...state, product: getCategory })
                        // return { ...state, product: getCategory }

                    }
                    // state.product = action.payload;
                    // state.totalCount = action.payload.length;
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
            .addCase(getSingleProduct.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                }
                return { ...state, product: action.payload }
                //state.product = action.payload;
            })
            .addCase(addingProduct.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                }
                if (action.payload instanceof AxiosError) {
                    // console.log("ssgsgsgd")
                }
                if (action.payload && "id" in action.payload) {

                    return { ...state, product: [...state.product, action.payload],isDone:true  }
                }
            })
            // .addCase(addProduct.fulfilled, (state, action) => {
            //     if (action.payload && "message" in action.payload) {
            //         return state;
            //     } else {
            //         if (action.payload) {
            //             state.product.push(action.payload)
            //             state.isDone = true;
            //         }
            //     }
            // })
            // .addCase(updateProduct.fulfilled, (state, action) => {
            //     if (action.payload && "message" in action.payload) {
            //         return state;
            //     } else {
            //         if (action.payload) {
            //             state.isDone = true;
            //         }
            //     }

            // })
            .addCase(modifyProduct.fulfilled, (state, action) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    if (action.payload) {
                        const getProducts = [...state.product]
                        const updateProducts = getProducts.map((product) =>
                            (product.id === action.payload?.id) ? action.payload : product
                        )
                        return { ...state, product: updateProducts,isDone:true }
                    }
                }
            })
            .addCase(modifyProduct.rejected, (state, action) => {
                state.isDone = false;
            })
            .addCase(modifyProduct.pending, (state, action) => {
                state.isDone = false;
            })
            .addCase(addingProduct.rejected, (state, action) => {
                state.isDone = false;
            })
            .addCase(addingProduct.pending, (state, action) => {
                state.isDone = false;
            })
            .addCase(deletingProduct.fulfilled, (state, action) => {
                {
                    if (action.payload) {
                        const newReturn = state.product.filter((reqData) => { return reqData.id !== action.payload })
                        return { ...state, product: newReturn,isDone:true}
                    }
                }
            })
            .addCase(deletingProduct.pending, (state, action) => {
                state.isDone = false;
            })
            .addCase(deletingProduct.rejected, (state, action) => {
                state.isDone = false;
            })
    }
});

const experimentReducer = productSlice.reducer;
export default experimentReducer;
export const { ascendingOrder, sortByPrice } = productSlice.actions;