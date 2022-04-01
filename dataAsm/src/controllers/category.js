import Category from "../models/category";

export const create = async (req, res) => {
    const {name} = req.body;
    try {
        const  category = await new Category({name}).save();
        res.status(200).json({
            message: "Thêm thành công 1 category",
            category
        })
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không tạo được category"
        })
    }
};
export const list = async (req, res) => {
    try {
        const categorys = await Category.find().exec();
        res.status(200).json(categorys)
    } catch (error) {
        res.status(401).json({
            message: "Không lấy được danh sách category"
        })
    }
};
export const read = async (req, res) => {
    const condistion = { _id: req.params.id }
    try {
        const category = await Category.findOne(condistion).exec();
        res.status(200).json(category)
    } catch (error) {
        res.status(401).json({
            message: "Không tìm thấy category"
        })
    }
};
export const remove = async (req, res) => {
    const condistion = { _id: req.params.id }
    try {
        const category = await Category.findOneAndDelete(condistion).exec();
        res.status(200).json(category)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , xoá không thành công"
        })
    }
}
export const update = async (req, res) => {
    const condistion = { _id: req.params.id };
    const { name } = req.body;
    try {
        const category = await Category.findOneAndUpdate(condistion, { name })
        res.status(200).json(category)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không update được category"
        })
    }
}