const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
       name: { type: String, minlength: 3, maxlength: 200, required: true }, 
       categoryId: String,
       subCategory: String,
       form: { type: Boolean, required: true },
       price: { type: Number, required: true },
       status: { type: Boolean, required: true },
       image: String,
       title: { type: String, required: true }
    },
    { timestamps: true, versionKey: false }
)

module.exports = mongoose.model("product", ProductSchema);