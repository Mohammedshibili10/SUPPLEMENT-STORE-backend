import express from "express";
// import authmiddleware from "../Middleware/authmiddleware.js";
import { finduser } from "./logincontroller.js";


const loginRouter = express.Router()


loginRouter.post('/',finduser)
export default loginRouter;