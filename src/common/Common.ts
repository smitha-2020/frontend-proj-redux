export interface Categorys {
    id: number,
    name: string,
    image: string
}
export interface Rating {
    rate: number,
    count: number
}
// export interface Product {
//     id: number,
//     title: string,
//     price: number,
//     description: string,
//     category: string,
//     image: string,
//     rating:Rating 
// }

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    images: string[],
    category: Categorys
}
export interface Cart {
    quantity: number,
    product: Product
}
export interface authenticUser {
    id: number,
    avatar:string,
    email: string,
    password: string,
    name: string,
    role:string
}

export interface RegisteredUser {
    access_token:string,
    user:authenticUser,
    isRegistered:boolean,
    isLogin:boolean
}
export interface ProductDesc {
    title: string,
    price: number,
    description: string,
    categoryId: number,
    images: string[]
}
export interface LoginData {
    email: string,
    password: string
}
export type Inputs = {
    name: string,
    email: string,
    password: string,
    repassword?:string,
    avatar:FileList
  };