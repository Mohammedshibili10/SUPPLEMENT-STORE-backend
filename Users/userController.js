import User from "./userModels.js";
import bcrypt from "bcryptjs";

export const createuser= async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            return res.send({ message: "All fields are required" })
        }

         const result= await User.findOne({email})
         if(result){
            return res.send({message:"already existing"})

         }
        const hashpassword= await  bcrypt.hash(password ,10)
        const user = await User.create({ name, email, password:hashpassword })
        return res.status(200).json({
            data: user,
            message: "User created successfully"
        })
    }
    catch(error){
        console.log(error)
        return res.status(500).send({message:error.message})


    }
}


export const getuserbyid=async(req,res)=>{
    try{
    const {id}= req.params;
    const user =await User.findById(id)
    return res.status(400).json({
        data:user,
          message: "Product finded successfully"
    })
    }
    catch(error){
        console.log(error)
        return res.status(500).send({message:error.message})
    }
}

export const getuser=async(req,res)=>{
    try{
       const user=await  User.find({})
       return res.status(400).json({data:user})
    }catch(error){
        console.log(error)
        return res.status(500).send({message:error.message})

    }
}

 export const updateduser=async(req,res)=>{
    try{
          const {name,email,password}=req.body
          if(!name||!email||!password){
            return res.status(400).send({ message: "All fields are required" })
          }

        const {id}=req.params;
        const result= await User.findByIdAndUpdate(id,req.body)
        if(!result){
            return res.status(404).send({message:"user not found"})
        }
         return res.status(200).json({data:result,
            message:"user data updated"
         })
        

    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
}

