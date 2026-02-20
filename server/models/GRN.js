
import mongoose from "mongoose";
export default mongoose.model("GRN",
 new mongoose.Schema({purchaseId:String,received:Boolean},{timestamps:true})
);
