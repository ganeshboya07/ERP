
import mongoose from "mongoose";
export default mongoose.model("Purchase",
 new mongoose.Schema({supplier:String,total:Number,status:String},{timestamps:true})
);
