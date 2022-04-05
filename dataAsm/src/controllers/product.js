import Product from "../models/product";

export const creat = async (req, res) => {
    const { name, price, img, quantity, description, category } = req.body;
    try {
        const product = await new Product({ name, price, img, quantity, description, category }).save();
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không thêm được sản phẩm"
        })
    }
}
export const getAll = async (req, res) => {
    let { name, price, page, _limit } = req.query
    if (name || price || (page && _limit)) {
        console.log("abc");
        const { name } = req.query;
        const { price } = req.query;
        if (name) {
            try {
                const products = await Product.find({ name: new RegExp(name, 'i') }).exec();
                res.status(200).json(products)
            } catch (error) {
                res.status(401).json({
                    message: "Lỗi , không lấy được sản phẩm"
                })
            }
        }
        if (price) {
            try {
                const products = await Product.find({ price: { $gt: price } }).exec();
                res.status(200).json(products)
            } catch (error) {
                res.status(401).json({
                    message: "Lỗi , không lấy được sản phẩm"
                })
            }
        }
        if (page && _limit) {
            if (+page < 1) {
                page = 1
            }
            const page_size = +_limit;
            const statr = ((+page - 1) * + page_size);
            try {
                const products = await Product.find().skip(statr).limit(page_size).exec();
                res.status(200).json(products)
            } catch (error) {
                res.status(401).json({
                    message: "Lỗi , không lấy được sản phẩm"
                })
            }
        }
    } else {
        try {
            const products = await Product.find().exec();
            res.status(200).json(products)
        } catch (error) {
            res.status(401).json({
                message: "Lỗi , không lấy được sản phẩm"
            })
        }
    }
}
export const get = async (req, res) => {
    const condistion = { _id: req.params.id }
    try {
        const product = await Product.findOne(condistion).exec();
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi , không tìm được sản phẩm"
        })
    }
}
export const update = async (req, res) => {
    const condistion = { _id: req.params.id };
    const { name, price, img, quantity, description, category } = req.body;
    try {
        const product = await Product.findOneAndUpdate(condistion, { name, price, img, quantity, description, category }).exec();
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi, update không thành công !"
        })
    }
};
export const productCate = async (req, res) => {
    const condistion = { category: req.params.cate };
    try {
        const products = await Product.find(condistion).exec();
        res.status(200).json(products)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi,không thành công !"
        })
    }
};
export const remove = async (req, res) => {
    const condistion = { _id: req.params.id };
    try {
        const product = await Product.findOneAndDelete(condistion).exec();
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json({
            message: "Lỗi, xoá sản phẩm không thành công !"
        })
    }
}
