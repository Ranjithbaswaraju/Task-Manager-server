const mongoose= require("mongoose")

const employeeSchema = new mongoose.Schema({

   name: {
      type: String,
      required: true
   },

   email: {
      type: String,
      required: true,
      unique:true
     
   },
   
   designation:{
      type: String,
      required: true,
   },
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   },
   createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
   }

}, { timestamps: true })
const EmployeeModel=mongoose.model("employee",employeeSchema)
module.exports=EmployeeModel