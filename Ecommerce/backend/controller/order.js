const Order = require("../model/Order")
const Product = require("../model/Product")
const mongoose = require("mongoose");

const index = async (req, res) => {

    // depending upon the seller and buyer, send
    let orders = [];
    if (req.decoded_token.role == "buyer") {
        orders = await Order.find({ created_by: req.decoded_token._id });
    }
    else if (req.decoded_token.role == "seller") {

        let product_ids = await Product.find({ created_by: req.decoded_token._id }, { _id: 1 })

        
        product_ids = product_ids.map(el => mongoose.Types.ObjectId(el))
        orders = await Order.aggregate([
            {
                $match: {
                    // "products._id": { $in: [ mongoose.Types.ObjectId("62ecd4bfd97d87347c0a2a24")] }
                    "products._id": { $in: product_ids }
                }
            }
        ])
    }

    res.send({
        data: orders
    })
}

const show = async (req, res, next) => {

    let order = await Order.findById(req.params.id);
    return res.send({
        data: order
    })
}

const store = async (req, res, next) => {

    try {

        let order = await Order.create({ ...req.body, created_by: req.decoded_token._id });

        let products = req.body.products;
        products.map(async (el) => {
            let product = await Product.findByIdAndUpdate(el._id, {
                $inc: { in_stock: -el.quantity }
            })
        })

        res.send({ data: order })
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    index, show, store
}



