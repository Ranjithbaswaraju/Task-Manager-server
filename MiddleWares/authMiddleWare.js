const jwt=require("jsonwebtoken")

const AuthMiddleWare=async(req,res,next)=>{

    try{
        const token = req.headers.authorization

        if(!token){
            return res.status(500).json({
                success:false,
                message: "Token not provided"
            })
        }

        const splitToken=token.split(" ")[1]
        const decode=jwt.verify(splitToken,process.env.JWT_SECRET)
        req.user=decode
        next()
    }
    catch(err){
        return res.status(401).json({
         success: false,
         message: "Invalid Token"
      })
    }

}
module.exports=AuthMiddleWare