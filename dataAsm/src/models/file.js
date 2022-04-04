import mongoose, {Schema} from "mongoose";
import product from "./product";
const fileSchema = new Schema({
    name : {
        type : String,
        required: true,
        maxlength : 200
    },
    productId : {
        type : mongoose.Types.ObjectId,
        ref : product,
    }
},{timestamps : true})

export default mongoose.model("file",fileSchema)