const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
       title: { type: String, required: true },
       parent: String
    },
    { timestamps: true, versionKey: false }
)

module.exports = mongoose.model("product", ProductSchema);