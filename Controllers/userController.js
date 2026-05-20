const UserModel = require("../Models/userSchema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const loginController=async(req,res)=>{
    const{email,password}=req.body
    try{

        if(!email || !password){
             return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
        const User=await UserModel.findOne({email})

        if(!User){
             return res.status(409).json({
                success:false,
                message:"User Not Exists"
            })
        }

        const isMatch=await bcrypt.compare(password,User.password)
        
        if(!isMatch){
            return res.status(401).json({
                success:false,
                message:"Invalid Credentials"
            })
        }

        const token=await jwt.sign(
            {
                id:User._id,
                role:User.role
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d"}
        )

        return res.status(200).json({
            success:true,
            message:"Login Successfully",
            token,
            User:{
                id: User._id,
                name: User.name,
                email: User.email,
                role: User.role
            }

        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Unable to login the user"
        })
    }
}

const signupController=async(req,res)=>{
    const {name,email,password,role}=req.body
    try{

        if (!name || !email || !password ) {

         return res.status(400).json({
            success: false,
            message: "All fields are required"
         })

      }
        const UserExist=await UserModel.findOne({email})

        if(UserExist){
            return res.status(409).json({
                success:false,
                message:"User already Exists"
            })
        }

        const hashedPassword=await bcrypt.hash(password,12)

        const User=await UserModel.create({
            name,
            email,
            password:hashedPassword,
            role
        })

        return res.status(201).json({
            success:true,
            message:"User Registered Successfully",
            User

            //for reference purpose

            // data: {
            //     id: User._id,
            //     name: User.name,
            //     email: User.email,
            //     role: User.role
            // }
        })
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Unable to register the user"
        })
    }
}

module.exports={loginController,signupController}