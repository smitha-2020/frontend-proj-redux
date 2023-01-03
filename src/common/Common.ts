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
    product: Product[]
}
export interface authenticUser {

    id: number,
    avatar:string,
    email: string,
    password: string,
    name: string,
    role:string

}