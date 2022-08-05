
const { body, validationResult } = require('express-validator');
const Product = require("../model/Product")

const index = async (req, res) => {
    let products = await Product.find({});

    res.send({
        data: products
    })
}
const sellerIndex = async (req, res) => {

    let products = await Product.find({ created_by: req.decoded_token._id });

    res.send({
        data: products
    })
}
const show = async (req, res, next) => {

    let product = await Product.findById(req.params.id);
    return res.send({
        data: product
    })
}

const store = async (req, res) => {

    try {

        let product = await Product.create({ ...req.body, images: req.files, created_by: req.decoded_token._id });
        res.send(product)
    }
    catch (err) {
        next(err)
    }
}


const update = async (req, res, next) => {
    const { name, price, in_stock, description, categories, brands } = req.body;

    // console.log(req.body);
    // res.send("1212")
    // return;
    // console.log(req.files);
    
    console.log(req.body?.images?.length)
    

    let old_images = [];
    if (req.body?.images) {
        old_images = req.body.images.map(el => {
            return JSON.parse(el);
        })
    }

    let product = await Product.findByIdAndUpdate(req.params.id, {
        name,
        price,
        in_stock,
        description,
        categories,
        brands,
        images: [...old_images, ...req.files]
    }, { new: true })

    // console.log({ product })
    // res.send({data:{}})
    // return

    res.send({ data: product })
    return

}

const updateReview = async (req, res) => {
    // TODO: block seller to update another sellers product
    // let user = req.decoded.name;
    let reviews = await Product.findById(req.params.id).select("reviews");
    // return res.send(reviews.reviews)
    req.body.user = "hello"
    req.body.created_at = Date.now();
    console.log(req.body)
    let product = await Product.findByIdAndUpdate(req.params.id, { reviews: [...reviews.reviews, { ...req.body }] },
        { new: true })
    res.send(product)
}

const deleteProduct = async (req, res, next) => {

}

module.exports = {
    index, sellerIndex, show, store, update, deleteProduct, updateReview
}



