import mongoose from "mongoose";

const userSessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    token: {
        type: String
    },
    expiresAt: {
        type: Date,
        default: Date.now() + 60 * 1000, // 3600 * 24 * 60 // 1 DAY
        index: { expires: 0 }
    }
},{
    timestamps: true
})

const sessionSchema = new mongoose.Schema({
    expires: {
        type: Date,
    },
    lastModified: {
        type: Date,
    },
    session: {
        type: String,
    }
},{
    timestamps: true
})

export const userSessionModal = mongoose.model('usersession',userSessionSchema);
export const sessoionModal = mongoose.model('session',sessionSchema);