import { AnyAction, MiddlewareArray, ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { createStore, RootState } from "../../redux/store";
import server from "../shared/server";
import { updatecategory } from "../../common/data";
import { createCategory, deleteCategory, fetchAllCategories, getSingleCategory, updateCategory } from "../../redux/reducers/categoryReducers";
import { Categorys } from "../../common/common";

let store: ToolkitStore<RootState, AnyAction, MiddlewareArray<[ThunkMiddleware<RootState, AnyAction, undefined>]>>
beforeAll(() => {
    server.listen()
})
afterAll(() => {
    server.close()
})
beforeEach(() => {
    store = createStore();
})

describe("test category reducers",()=>{
    test("initial state of the category reducer",()=>{
        expect(store.getState().categoryReducers.length).toBe(0)
    }),
    test("should fetch all categories",async ()=>{
        await store.dispatch(fetchAllCategories())
        expect(store.getState().categoryReducers.length).toBe(3)
    }),
    test("should create a category",async ()=>{
        const newCategory:Categorys =  {
            id: 1,
            name: "Clothes",
            image: "https://api.lorem.space/image/fashion?w=640&h=480&r=2301",
        }
        await store.dispatch(createCategory(newCategory))
        expect(store.getState().categoryReducers[0].id).toBe(1)
    })
    test("should update a category",async ()=>{
        await store.dispatch(fetchAllCategories())
        await store.dispatch(updateCategory(updatecategory))
        expect(store.getState().categoryReducers[0].name).toBe("Testing Cloths")
    })
    test("should delete a category",async ()=>{
        await store.dispatch(fetchAllCategories())
        await store.dispatch(deleteCategory(3))
        expect(store.getState().categoryReducers[0].name).toBe("Furniture")
    })
})