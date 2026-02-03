
import express from "express";
// import authmiddleware from './Middleware/authmiddleware.js'
 

import { createProduct, deleteProduct, getProduct, getProductbyid, updateProduct } from "./productController.js";
import { uploader } from "./upload.js";


 const router=express.Router()

router.get("/", getProduct )
router.get("/:id", getProductbyid)
router.post("/", uploader.single('image'), createProduct)
router.put("/:id", uploader.single('image'), updateProduct)
router.delete("/:id", deleteProduct)
export default router;