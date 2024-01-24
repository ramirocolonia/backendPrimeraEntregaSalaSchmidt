import express from "express"
import productsRouter from "./routes/products.router.js"
import cartsRouter from "./routes/carts.router.js"

const app = express()
const PORT = 8080

// MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

// RUTAS
app.use("/", productsRouter)
app.use("/", cartsRouter)



app.listen(PORT, () => {
    console.log(`servidor escuchando en el puerto ${PORT}`);
});