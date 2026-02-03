import User from "../Users/userModels.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const finduser = async (req, res) => {
  try {
      const { email,password} = req.body
    const user = await User.findOne({email})
   
      if(! email || !password){
        return res.json({message:"All fields are required"})
      }
    if (!user) {
      return res.status(404).json("user not found")
    }
    
 const isMatch= await bcrypt.compare(password,user.password)
     if(!isMatch){
      return res.json({message:"incorrect password"})
     }

    // const token = jwt.sign({id:user._id, name:user.name},process.env.JWT_SECRET,{expiresIn:"1d"})
 

    res.status(200).json({
      data: user,
      token,
      message: "login succesfully"
   })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message })


  }
}