import { use } from "express/lib/application";
import User from "../models/user";
import jwt from "jsonwebtoken";


export const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username }).exec();
        if (!user) {
            return res.status(403).json(
                { message: "Username hoặc Password không chính xác" }
            )
        }
        if (!user.authenticate(password)) {
            return res.status(401).json({ message: "Username hoặc Password không chính xác" })
        }
        const token  = jwt.sign({_id : user._id},"123456a",{expiresIn: "24h"})
        res.status(200).json({token})
    } catch (error) {
        res.status(401).json({
            message: "Đăng nhập thất bại"
        })
    }
}
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const exitsUser = await User.findOne({ username }).exec();
        const exitsEmail = await User.findOne({ email }).exec();
        if (exitsUser) {
            return res.status(401).json({
                message: "Tên đăng nhập đã tồn tại"
            })
        }
        if (exitsEmail) {
            return res.status(401).json({
                message: "Email đã tồn tại"
            })
        }
        const user = await new User({ username, email, password }).save();
        res.status(200).json({
            user: {
                _id: user._id,
                role: user.role
            }
        })
    } catch (error) {
        console.log(error)
    }
}