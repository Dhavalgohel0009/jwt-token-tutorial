import mongoose from "mongoose"

const moviesSchema = mongoose.Schema({
    plot: { type : String },
    genres: { type : Array },
    runtime: { type : String },
    cast: { type : Array },
    poster: { type : String },
    title: { type : String },
    languages: { type : String },
    released: { type : Date },
    type: { type : String },
},{
    timestamps: true
})

export const moviesModal = mongoose.model('movie', moviesSchema);