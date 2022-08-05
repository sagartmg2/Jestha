const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    status: {
        type: String,
        enum: ["pending,shipped,rejected"]
    },
    products: [
        {
            name: String,
            price: Number,
            quantity: Number,
        }
    ],
    created_by: {
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Order", OrderSchema)