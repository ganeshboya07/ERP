
import mongoose from "mongoose";
export default mongoose.model("Invoice",
 new mongoose.Schema({saleId:String,amount:Number,paid:Boolean},{timestamps:true})
);
