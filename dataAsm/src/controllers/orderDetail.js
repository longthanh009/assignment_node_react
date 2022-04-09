import OrderDetail from "../models/orderDetail";

export const create = async (req, res) => {
    const product = req.body;
    const { _id, name, price, quantity, order } = product;
    try {
        const orderDetail = await new OrderDetail({ productId: _id, productname:name, price, quantity, order }).save();
        res.status(200).json({
            message: "Thêm chi tiết đơn hàng thành công"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Lỗi thêm chi tiết đơn hàng"
        })
    }
};
export const list = async (req, res) => {
    const {id} = req.params;
    try {
        const orderDetaillist = await OrderDetail.find({order : id}).exec();
        res.status(200).json(orderDetaillist)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Lỗi thêm chi tiết đơn hàng"
        })
    }
};
