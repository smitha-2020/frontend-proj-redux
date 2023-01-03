import { rest } from "msw";
import { setupServer } from "msw/node"

const handler = [
    rest.get("https://api.escuelajs.co/api/v1/products?offset=5&limit=500", (req, res, ctx) => {
        return res(
            ctx.json([{
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
                id: 13,
                title: "Awesome Frozen Salad2",
                price: 600,
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
            }])
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/products/", (req, res, ctx) => {
        const product = req.json();
        return res(
            ctx.json(product)
        )
    })
]

const server = setupServer(...handler);
export default server;