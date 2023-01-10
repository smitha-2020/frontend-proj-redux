import { AnyAction, MiddlewareArray, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { addToCart, removeFromCart } from "../../redux/reducers/cartReducer";
import { createStore, RootState } from "../../redux/store";
import server from "../shared/server";
import { newcartProduct } from "../../common/data";

let store: ToolkitStore<RootState, AnyAction, MiddlewareArray<[ThunkMiddleware<RootState, AnyAction, undefined>]>>
// let store: ToolkitStore<RootState, AnyAction, [ThunkMiddleware<RootState, AnyAction, undefined>]>
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
    test("Initial state of cart", () => {
        expect(store.getState().cartReducer.length).toBe(0)
    })
        // test("Adding items to cart", () => {
        //     store.dispatch(addToCart(newcartProduct))
        //     expect(store.getState().cartReducer.length).toBe(1)
        // }),
        // test("Removing items from cart", () => {
        //     store.dispatch(addToCart(newcartProduct))
        //     store.dispatch(removeFromCart(39))
        //     expect(store.getState().cartReducer.length).toBe(0)
        // })
});