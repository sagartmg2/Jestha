const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    status: {
        type: String,
        enum: ["pending", "shipped", "rejected"],
        default: "pending"
    },
    products: [
        {
            name: String,
            price: Number,
            quantity: Number,
            _id: {
                type: ObjectId,
                ref: "Product"
            }
        }
    ],
    created_by: {
        type: String
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Order", OrderSchema)