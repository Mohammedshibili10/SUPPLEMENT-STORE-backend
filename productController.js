import Product from "./productModels.js";




export const getProduct=async (req, res) => {
    try {

        const product = await Product.find({})
        return res.status(200).json({ data: product })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: error.message })
    }

}
export const getProductbyid = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        return res.status(200).json({
            data: product,
            message: "Product finded successfully"
        });
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
}
export const createProduct = async (req, res) => {
    try {
        const { name, description, feature, offer ,price} = req.body
        console.log(req.body)
        const image=req.file?.filename;
        // const price=req.body.price
        console.log(price)

        if (!name || !description  || !feature || !offer ||!price || !image ) {
             console.log(name,description,offer,feature,image)

            return res.status(400).send({ message: "All fields are required" })
        }
       
        const product = await Product.create({ name, description, feature, offer,image,price})
        return res.status(201).json({
            data: product,
            message: "Product created successfully"
        })
    }
    catch (error) {
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
}
export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, feature, offer} = req.body;
        const image=req.file?.filename;
        if (!name || !description || !price || !feature || !offer || !image) {
            return res.status(400).send({ message: "All fields are required" })
        }
        const { id } = req.params;
        const result = await Product.findByIdAndUpdate(id, req.body,req.file);
        if (!result) {
            return res.status(404).send({ message: "Product not found" })
        }
        return res.status(200).json({
            data: result,
            message: "Product updated successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message })
    }
}
export const deleteProduct =  async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Product.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).send({ message: "Product not found" })
        }
        return res.status(200).json({
            message: "Product deleted successfully"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error.message })
    }
}