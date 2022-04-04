import File from "../models/file";

export const create = async (req, res) => {
    const { name,productId } = req.body;
    try {
        const file = await new File({ name ,productId}).save();
        res.status(200).json({
            message: "Thêm thành công 1 file",
            file
        })
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không tạo được file"
        })
    }
};
export const list = async (req, res) => {
    try {
        const files = await File.find().exec();
        res.status(200).json(files)
    } catch (error) {
        res.status(401).json({
            message: "Không lấy được danh sách file"
        })
    }
};
export const read = async (req, res) => {
    const condistion = { productId: req.params.id }
    try {
        const file = await File.findOne(condistion).exec();
        res.status(200).json(file)
    } catch (error) {
        res.status(401).json({
            message: "Không tìm thấy file"
        })
    }
};
export const remove = async (req, res) => {
    const condistion = { _id: req.params.id }
    try {
        const file = await File.findOneAndDelete(condistion).exec();
        res.status(200).json(file)
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
        const file = await File.findOneAndUpdate(condistion, { name })
        res.status(200).json(file)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không update được file"
        })
    }
}