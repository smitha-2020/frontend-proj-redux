import { rest } from "msw";
import { setupServer } from "msw/node"
import { CategoryModify, Categorys, Product, ProductDesc } from "../../common/common";
import { products,categoryList } from '../../common/data'


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
    rest.put("https://api.escuelajs.co/api/v1/categories/:id/products", (req, res, ctx) => {
        const { id } = req.params;
        const foundProduct:Product[] = products.filter((reqProduct) => { return reqProduct.category.id === Number(id) })
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
        if (product.price < 0) {
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
        const remainingProduct = products.filter((reqProduct) => { return reqProduct.id !== Number(id) })
        return res(
            ctx.json({
                ...remainingProduct
            })
        )
    }),
    rest.get("https://api.escuelajs.co/api/v1/categories",async (req,res,ctx) => {
        return res(
            ctx.json(categoryList)
        )
    }),
    rest.get("https://api.escuelajs.co/api/v1/categories/:id",async (req,res,ctx) => {
        const { id } = req.params;
        const foundCategory = categoryList.filter((category) => {return category.id === Number(id)})
        return res(
            ctx.json(foundCategory)
        )
    }),
    rest.post("https://api.escuelajs.co/api/v1/categories/",async (req,res,ctx) => {
        const category: Categorys = await req.json()
        return res(
            ctx.json(category)
        )
    }),
    rest.put("https://api.escuelajs.co/api/v1/categories/:id",async (req,res,ctx) => {
        const { id } = req.params;
        const foundCategory:Categorys[] = categoryList.filter((reqProduct) => { return reqProduct.id === Number(id) })
        const [found] = foundCategory;
        const newcategory: Categorys = await req.json()
        if (foundCategory) {
            return res(
                ctx.json({
                    ...found,
                    ...newcategory
                })
            )
        } else {
            return res(
                ctx.status(404, "Np product found")
            )
        }
    }),
    rest.delete("https://api.escuelajs.co/api/v1/categories/:id",async (req,res,ctx) => {
        const { id } = req.params;
        const foundCategory:Categorys[] = categoryList.filter((reqProduct) => { return reqProduct.id === Number(id) })
        return res(
            ctx.json(foundCategory)
        )
    })
]


const server = setupServer(...handler);
export default server;