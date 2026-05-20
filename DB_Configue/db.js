const mongoose=require("mongoose")
const dotenv=require("dotenv")
dotenv.config()
const MONGO_URL=process.env.MONGO_URL

async function ConnectDB() {
    try{
        await mongoose.connect(MONGO_URL,{dbName:"TaskDB"})
        console.log("Database Connected Successfully")
    }
    catch(err){
        console.log(err)
    }
}
module.exports=ConnectDB