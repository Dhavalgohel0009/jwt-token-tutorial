import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET;
export const createLoginToken = async (userDetails) => {
    try {

        const payload = {
            email: userDetails.email,
            firstname: userDetails.firstname,
            lastname: userDetails.lastname,
            role: userDetails.role
        }
        const token = jwt.sign(payload, process.env.JWT_SECRET)
        return token;
    } catch (error) {
        console.log("At createLoginToken : ",error)
        return false;
    }
}