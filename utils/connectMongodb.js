import mongoose from "mongoose";

const clientOptions = { 
    serverApi: { 
        version: '1',
        strict: true,
        deprecationErrors: true
    }
};

export const connectMongodb = async() => {

    const conn = await mongoose.connect(process.env.MONGO_URL, clientOptions)
    await mongoose.connection.db.admin().command({ ping: 1 })
        .then(()=> {
            console.log(`MongoDB connected : ${conn.connection.host}`)
        })
        .catch(err => console.error("MongoDB Connection Error:", err))
}