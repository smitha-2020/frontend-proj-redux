import { rest } from "msw";
import { setupServer } from "msw/node"
import { Product, ProductDesc } from "../../common/Common";

const products = [
    {
        id: 13,
        title: "Incredible Metal Bacon",
        price: 317,
        description: "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        images: [
            "https://api.lorem.space/image/watch?w=640&h=480&r=9003",
            "https://api.lorem.space/image/watch?w=640&h=480&r=375",
            "https://api.lorem.space/image/watch?w=640&h=480&r=6293"
        ],
        category: {
            id: 2,
            name: "Electronics",
            image: "https://api.lorem.space/image/watch?w=640&h=480&r=9863",
        }
    },
    {
        id: 12,
        title: "Awesome Frozen Salad",
        price: 444,
        description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        images: [
            "https://api.lorem.space/image/watch?w=640&h=480&r=8808",
            "https://api.lorem.space/image/watch?w=640&h=480&r=6980",
            "https://api.lorem.space/image/watch?w=640&h=480&r=1512"
        ],
        category: {
            id: 2,
            name: "Electronics",
            image: "https://api.lorem.space/image/watch?w=640&h=480&r=6865",
        }
    },
    {
        id: 1,
        title: "Twesome Frozen Salad22",
        price: 600,
        description: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        images: [
            "https://api.lorem.space/image/watch?w=640&h=480&r=8808",
            "https://api.lorem.space/image/watch?w=640&h=480&r=6980",
            "https://api.lorem.space/image/watch?w=640&h=480&r=1512"
        ],
        category: {
            id: 1,
            name: "Electronics",
            image: "https://api.lorem.space/image/watch?w=640&h=480&r=6865",
        }
    },
]
const handler = [
    rest.get("https://api.escuelajs.co/api/v1/products", (req, res, ctx) => {
        return res(
            ctx.json(products)
        )
    }),
   
    rest.put("https://api.escuelajs.co/api/v1/products/:id", async (req, res, ctx) => {
        const product: Partial<Product> = await req.json();
        const { id } = req.params;
        const foundProduct = products.find((reqProduct) => reqProduct.id === Number(id))
        if (foundProduct) {
            return res(
                ctx.json({
                    ...foundProduct,
                    ...product
                })
            )
        } else {
            return res(
                ctx.status(404, "Np product found")
            )
        }
    }),
    rest.get("https://api.escuelajs.co/api/v1/categories/:id/products", (req, res, ctx) => {
        const { id } = req.params;
        const foundProduct = products.filter((reqProduct) => {return reqProduct.category.id === Number(id)})
        if (foundProduct) {
            return res(
                ctx.json({
                    ...foundProduct,
                })
            )
        } else {
            return res(
                ctx.status(404, "Np product found")
            )
        }
    }),
    rest.post("https://api.escuelajs.co/api/v1/products", async (req, res, ctx) => {
        const product: ProductDesc = await req.json()
        if(product.price < 0) {
            return res(
                ctx.status(400, "invalid data")
            )
        }
        return res(
            ctx.json(product)
        )
    }),
    rest.delete("https://api.escuelajs.co/api/v1/products/:id", async (req, res, ctx) => {
        const { id } = req.params;
        const remainingProduct = products.filter((reqProduct) => {return reqProduct.id !== Number(id)})
        return res(
            ctx.json({
                ...remainingProduct
            })
        )
        
    })
]


const server = setupServer(...handler);
export default server;