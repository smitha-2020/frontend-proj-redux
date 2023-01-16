import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AxiosError } from "axios"
import { IProduct, IProductDetails } from "../../types/productType"
import { fetchAllProducts, fetchAllProductsbyCategory, deletingProduct, modifyProduct, addingProduct, getSingleProduct } from "./reducerMethods/productMethods"

const initialState: IProductDetails = {
    product: [],
    totalCount: 0,
    isDone: false
};

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
        build.addCase(fetchAllProducts.fulfilled, (state, action: PayloadAction<IProduct[]>) => {
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
            .addCase(fetchAllProductsbyCategory.fulfilled, (state, action: PayloadAction<IProduct[] | Error>) => {
                if (action.payload && "message" in action.payload) {
                    return state;
                } else {
                    if (action.payload) {
                        const getCategory = action.payload;
                        console.log({ ...state, product: getCategory })
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

                    return { ...state, product: [...state.product, action.payload], isDone: true }
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
                        return { ...state, product: updateProducts, isDone: true }
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
                if (action.payload) {
                    const newReturn = state.product.filter((reqData) => { return reqData.id !== action.payload })
                    return { ...state, product: newReturn, isDone: true }
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