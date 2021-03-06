import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/auth";
import categoryRouter from "./routes/category";
import productRouter from "./routes/product";
import fileRouter from "./routes/file";
import userRouter from "./routes/user";
import orderDetailRouter from "./routes/orderDetail";
import orderRouter from "./routes/order";


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Router
app.use("/api", authRouter);
app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", fileRouter);
app.use("/api", userRouter);
app.use("/api",orderDetailRouter)
app.use("/api",orderRouter)

// connect database MongoBb
mongoose.connect("mongodb://localhost:27017/assignment_web503")
app.listen(3001, () => {
    console.log(`Server is running on port: 3001`);
})