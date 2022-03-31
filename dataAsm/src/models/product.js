import mongoose, {Schema} from "mongoose";
import { StrictMode } from "react";
import category from "./category";
const productSchema = new Schema({
    name : {
        type : String,
        required: true,
        maxlength : 200
    },
    price : {
        type : Number,
        required : true,
    },
    img : {
        type : String,
        require : true
    },
    quantity : {
        type : Number,
        default :0
    },
    description : {
        type: String
    }
    ,
    sold : {
        type : Number,
        default  : 0
    }
    ,
    category : {
        type : mongoose.Types.ObjectId,
        ref : category
    }
},{timestamps : true})

export default mongoose.model("Product",productSchema)