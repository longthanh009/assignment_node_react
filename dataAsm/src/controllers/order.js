import Order from "../models/order";
import OrderDetail from "../models/orderDetail";

export const create = async (req, res) => {
    const {username, name, phone, address, notes,total } = req.body;
    let numberphone = +phone
    console.log();

    try {
        const order = await new Order({ username,name, phone: numberphone, address, notes,total }).save();
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json({
            message: "Lỗi đặt đơn hàng"
        })
    }
};
export const list = async(req,res) =>{
    const {username} = req.query
    if (username) {
        try {
            const orders = await Order.find({username: username}).exec();
            res.status(200).json(orders)
        } catch (error) {
            
        }
    } else {
        try {
            const orders = await Order.find().exec();
            res.status(200).json(orders)
        } catch (error) {
            
        }
    }
};
export const read = async (req,res) =>{
    const condistion = {order : req.params.id};
    try {
        const orderDetail = await OrderDetail.find(condistion).exec();
        res.status(200).json(orderDetail)
    } catch (error) {
        res.status(400).json({
            message: "Không đọc được chi tiết đơn hàng"
        })
    }
};
export const update = async (req,res) =>{
    const condistion = req.params.id;
    const {status} = req.body;
    try {
        const order = await Order.findByIdAndUpdate(condistion,{status : status}).exec();
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json({
            message : "Update đơn hàng không thành công"
        })
    }
};
