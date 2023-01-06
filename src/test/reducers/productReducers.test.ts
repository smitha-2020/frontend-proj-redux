import { Product, ProductDesc } from "../../common/Common";
// import { addProduct, fetchAllProducts } from "../../redux/reducers/ProductReducers";
// import { store } from "../../redux/store";
// import server from "../shared/server";
 

// beforeAll(()=>{
//     server.listen()
// })

// afterAll(()=>{
//     server.close()
// })
//  server.listen();
//  describe("test product reducer",()=> {
//     test("test to return initial state for product reducer",()=>{
//       expect(store.getState().productReducer.length).toBe(0)
//     }),
//     test("test should return the list of products",async ()=>{
//         await store.dispatch(fetchAllProducts())
//         expect(store.getState().productReducer.length).toBe(2)
//         // expect(store.getState().productReducer.length).toBe(0)
//       }),
//       test("test should add a product",async ()=>{
//         const newProduct:ProductDesc = {
//             title: "new data",
//             price: 600,
//             description: "new description",
//             categoryId: 123,
//             images:  [
//                 "https://api.lorem.space/image/watch?w=640&h=480&r=8808",
//                 "https://api.lorem.space/image/watch?w=640&h=480&r=6980",
//                 "https://api.lorem.space/image/watch?w=640&h=480&r=1512"
//             ]
//         }
//         await store.dispatch(addProduct(newProduct))
//         expect(store.getState().productReducer.length).toBe(3)
//         // expect(store.getState().productReducer.length).toBe(0)
//       })
// })
