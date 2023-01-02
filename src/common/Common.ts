export interface Category {
    id: number,
    name: string,
    image: string
}
export interface Rating {
    rate: number,
    count: number
    }
export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating:Rating 
}

export interface Cart{
    quantity:number,
    product:Product[]
}