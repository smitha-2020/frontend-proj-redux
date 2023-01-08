import { AnyAction, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import {  ascendingOrder, deletingProduct, fetchAllProducts, modifyProduct } from "../../redux/reducers/ProductReducers";
import { createStore, RootState } from "../../redux/store";
import server from "../shared/server";
import { data } from "../../common/data";

let store: ToolkitStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction, undefined>]>
beforeAll(() => {
    server.listen()
})
afterAll(() => {
    server.close()
})
beforeEach(() => {
    store = createStore();

})
server.listen();
describe("test product reducer", () => {
    test("test to return initial state for product reducer", () => {
        expect(store.getState().productReducer.product.length).toBe(0)
    }),
        test("test should return the list of products", async () => {
            await store.dispatch(fetchAllProducts())
            expect(store.getState().productReducer.product.length).toBe(3)
        }),
        // test("should add a new product", async () => {
        //     //await store.dispatch(fetchAllProducts())
        //     const productData:ProductDesc = {
        //         title: "New Product",
        //         price: 10,
        //         description: "A description",
        //         categoryId: 1,
        //         images: ["https://api.lorem.space/image/watch?w=640&h=480&r=8808"]
        //     }
        //     await store.dispatch(addingProduct(productData))
        //     expect(store.getState().productReducer.product[0].price).toBe(10)
        //     expect(store.getState().productReducer.product.length).toBe(1)
        // }),
        test("should display products in descending order", async () => {
            await store.dispatch(fetchAllProducts())
            store.dispatch(ascendingOrder("desc"))
            expect(store.getState().productReducer.product[0].title).toBe("Twesome Frozen Salad22")
        }),
        test("should display products in ascending order", async () => {
            await store.dispatch(fetchAllProducts())
            store.dispatch(ascendingOrder("asc"))
            expect(store.getState().productReducer.product[0].title).toBe("Awesome Frozen Salad")
        }),
        test("should update the product", async () => {
            await store.dispatch(fetchAllProducts())
            await store.dispatch(modifyProduct(data))
            expect(store.getState().productReducer.product.find(productDetails => productDetails.id === 1)?.title).toBe("Change title")
        }),
        test("should delete the product", async () => {
            await store.dispatch(fetchAllProducts())
            await store.dispatch(deletingProduct(13))
            expect(store.getState().productReducer.product.length).toBe(2)
        })

})
