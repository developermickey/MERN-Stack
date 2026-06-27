import User from "../models/User.js";
import bcrypt from "bcryptjs"

export const userRegister = async (req, res) => {
        try {

            const {name, email, password} = req.body;

            const existingUser = await User.findOne({email});

            if(existingUser){
                return res.status(409).json({
                    success: false,
                    message: "User already exists",
                });
            }

            const hashPassword = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                name,
                email,
                password: hashPassword
            })

            return res.status(201).json({
                success: true,
                message: "User register successfully"
            })
            
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Server Error From Register Route"
            })
        }

}

