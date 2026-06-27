import express from "express";
import dotenv from "dotenv"
import connectDB from "./src/config/db.js";
dotenv.config();
import userRouter from "./src/routes/userRoutes.js"
import { userRegister } from "./src/controllers/userController.js";

const app = express();
app.use(express.json())
app.use(express.urlencoded({urlencoded: true}))

const PORT = process?.env?.PORT || 5001;


app.use("/api/v1/users", userRegister)

app.get("/", (req, res) => {
    res.send("Hello World")
})



connectDB();

app.listen(PORT, () => {
    console.log(`Server is runing is ${PORT}`)
})