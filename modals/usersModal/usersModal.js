import mongoose from "mongoose";
import bcrpt from 'bcrypt';

const SALT_ROUNDS = 12;
const userRoles = ["admin", "user", "superadmin", "viewuser"];

const usersSchema = mongoose.Schema({
    email: { 
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate : {
            validator: function (v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v)
            },
            message: props => `${props.value} is not a valid email address!`
        }
    },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    role: { type: String, enum: userRoles, default: 'user' }
}, {
    timestamps: true
});

usersSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) next();

    bcrpt.genSalt(SALT_ROUNDS, (err, salt) => {
        if (err) {
            throw new Error("At genSalt password", err);
        }

        bcrpt.hash(user.password, salt, (err, hash) => {
            if (err) {
                throw new Error("At hashing password", err);
            }

            user.password = hash;
            next();
        });
    });
});

usersSchema.methods.comparePassword = async function (userPassword) {
    try {
        // 'this' refers to the document found in the database
        return await bcrpt.compare(userPassword, this.password);
    } catch (err) {
        return false;
    }
}

export const usersModal = mongoose.model('users',usersSchema);