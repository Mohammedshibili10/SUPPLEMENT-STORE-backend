import express from "express";
import mongoose from "mongoose";
import { port, mongourl } from "./config.js";
const app = express();
import productRoutes from "./productRoutes.js"
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import multer from 'multer'
import userRoutes from "./Users/userRoutes.js"
import loginRouter from "./login/loginRoutes.js"
import dotenv from 'dotenv';





app.use(cors())
app.use(express.json())
dotenv.config()
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static('uploads'))

mongoose.connect(mongourl)
    .then(() => {
        console.log("connected to mongodb")
    })
    .catch((error) => console.log("not connected to mongodb"))


app.use("/product", productRoutes)
app.use('/users', userRoutes)
app.use('/login', loginRouter)

app.listen(port, () => {
    console.log("port is running 5555")
})