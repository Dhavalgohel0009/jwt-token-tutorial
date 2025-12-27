import { usersModal } from "../../modals/usersModal/usersModal.js";

const userRoles = ["admin", "user", "superadmin", "viewuser"];

export const addNewUser = async (req, res, next) => {
    const reqBody = req.body;

    try {
        if (!reqBody.email) {
            return res.status(400).json({
                success: false,
                message: `Please provide valid information...`
            })
        }

        if (!reqBody.password) {
            return res.status(400).json({
                success: false,
                message: `Please provide valid information...`
            })
        }

        if (!reqBody.role || !userRoles.includes(reqBody.role)) {
            return res.status(400).json({
                success: false,
                message: `Please provide valid role...`
            })
        }

        const isUserAlreadyExist = await usersModal.findOne({ email: reqBody.email})

        if (isUserAlreadyExist) {
            return res.status(502).json({
                success: false,
                message: `User with same username already exist...`
            })
        }
        // Create new user
        const newUser = new usersModal(reqBody);
        const responce = await newUser.save();

        if (responce._id) {
            return res.status(200).json({
                success: true,
                message: `User created successfully...`
            })
        } else {
            res.status(400).json({
                success: false,
                message: `Please provide valid information...`
            })
        }
    } catch (error) {
        console.log("At addNewUser : ",error);
        return res.status(500).json({
            success: false,
            message: `Internal server error...`
        })
    }
}

export const loginUser = async (req, res, next) => {
    try {
        const reqBody = req.body;

        if (!reqBody.email) {
            return res.status(400).json({
                success: false,
                message: `Email or password not found...`
            })
        }

        if (!reqBody.password) {
            return res.status(400).json({
                success: false,
                message: `Email or password not found...`
            })
        }

        const isValidUser = await usersModal.findOne({ email: reqBody.email});

        if (!isValidUser) {
            return res.status(401).json({
                success: false,
                message: `User not found...`
            })
        }
        
        if (await isValidUser.comparePassword(reqBody.password)) {
            return res.status(200).json({
                success: true,
                message: `User login successfully`
            })   
        } else {
            return res.status(401).json({
                success: false,
                message: `Password not matched...`
            })   
        }
    } catch (err) {
        console.log("At loginUser :", err);
        return res.status(500).json({
            success: false,
            message: `Internal server error...`
        })
    }
}