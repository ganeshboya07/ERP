
import mongoose from "mongoose";
export default mongoose.model("Sale",
 new mongoose.Schema({customer:String,total:Number},{timestamps:true})
);
