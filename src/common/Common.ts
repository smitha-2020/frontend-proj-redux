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
    category: Categorys,
}
export interface Cart {
    quantity: number,
    product: Product
    userInfo:authenticUser
}
export interface authenticUser {
    id: number,
    avatar: string,
    email: string,
    password: string,
    name: string,
    role: string
}
export interface RegisteredUser {
    access_token: string,
    user: authenticUser,
    isRegistered: boolean,
    isLogin: boolean,
    isLoading:boolean
}
export interface ProductDesc {
    title: string,
    price: number,
    description: string,
    categoryId: number,
    images: string[]
}
export interface ProductBase{
    title: string,
    price: number,
    description: string,
    categoryId: number,
    imagestr:string[]
}
export interface ProductNew extends ProductBase{
    images: any[]
}
export interface LoginData {
    email: string,
    password: string
}
export type Inputs = {
    name: string,
    email: string,
    password: string,
    repassword?: string,
    avatar: FileList
};
export interface ProductDetails{
    product:Product[],
    totalCount:number,
    isDone:boolean
}
export interface ProductOpt {
    id: number,
    title?: string,
    price?: number,
    description?: string,
    images?: string[],
    categoryId?: number,
}
export interface ProductModify {
    id: number,
    updateProduct:Partial<Product>
}
export interface modeCheck{
    darkMode:boolean;
}
export interface CategoryModify{
    id:number,
    updateCategory:Partial<Categorys>
}