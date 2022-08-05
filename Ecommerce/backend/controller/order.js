const Order = require("../model/Order")
const Product = require("../model/Product")

const index = async (req, res) => {

    // depending upon the seller and buyer, send
    let orders = await Order.find({});
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

const store = async (req, res) => {

    try {

        let order = await Order.create({ ...req.body, created_by: req.decoded_token._id });
        
        res.send({ data: order })
    }
    catch (err) {
        next(err)
    }
}

module.exports = {
    index, show, store
}



