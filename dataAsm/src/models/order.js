import mongoose , {Schema} from "mongoose";
import user from "./user"
const orderSchema = new Schema({
    username : {
        type : Schema.Types.ObjectId,
        ref : user
    },
    name : {
        type: String,
        required : true
    },
    phone : {
        type: Number,
        required : true,
    },
    address : {
        type : String,
        required : true,
    },
    total : {
        type : Number,
        required :true
    },
    notes : {
        type  : String,
        default : null
    },
    status: {
        type : Number,
        default : 0
    }
},{timestamps : true})
export default mongoose.model("Order",orderSchema);