import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto";
import { v4 as uuidv4 } from "uuid";

const userSchema = new Schema({
    username: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        maxlength: 30
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        maxlength: 20,
        minlength: 6,
        required: true
    },
    role: {
        type: Number,
        default: 0
    }, 
    salt: {
        type: String
    }
}, { timestamps: true })
userSchema.pre('save', function (next) {
    this.salt = uuidv4();
    this.password = this.hashPassword(this.password);
    next();
})
userSchema.methods = {
    authenticate(password) {
        return this.password === this.hashPassword(password)
    },
    hashPassword(password) {
        if (!password) return
        try {
            return createHmac("sha265", this.salt).update(password).digest('hex')
        } catch (error) {
            console.log(error)
        }
    }
}
export default mongoose.model("User", userSchema)