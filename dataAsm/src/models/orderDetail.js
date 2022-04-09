import mongoose , {Schema} from "mongoose";
import order from "./order";
import product from "./product";

const orderDetailSchema = new Schema({
    productId: {
        type : Schema.Types.ObjectId,
        ref : product
    },
    productname: {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true
    },
    order: {
        type : Schema.Types.ObjectId,
        ref : order,
    }
});
export default mongoose.model("OrderDetail" ,orderDetailSchema)