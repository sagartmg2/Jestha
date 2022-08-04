
const Product = require("../model/Product")

const index = async (req, res) => {
    let products = await Product.find({});


    res.send({
        data: products
    })
}
const sellerIndex = async (req, res) => {

    console.log("yyyyyy")
    let products = await Product.find({ created_by: req.decoded_token._id });

    res.send({
        data: products
    })
}

const show = () => {

}

const store = async (req, res) => {

    let product = await Product.create({ ...req.body, images: req.files, created_by: req.decoded_token._id });
    res.send(product)
}

const deleteProduct = () => {
    // TODO: block seller to update another sellers product

}

const update = () => {
    // TODO: block seller to update another sellers product

}

const updateReview = () => {

}

module.exports = {
    index, sellerIndex, show, store, update, deleteProduct, updateReview
}