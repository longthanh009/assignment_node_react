import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import cors from "cors";

import authRouter from "./routes/auth";
import categoryRouter from "./routes/category";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Router
app.use("/api",authRouter);
app.use("/api",categoryRouter);

// connect database MongoBb
mongoose.connect("mongodb://localhost:27017/assignment_web503")
app.listen(3001,() =>{
    console.log(`Server is running on port: 3001`);
})