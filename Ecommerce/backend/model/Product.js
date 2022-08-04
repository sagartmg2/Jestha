const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        requried: true,
        validate: {
            validator: function (v) {
                return typeof (v) == "number" && v > 0
            },
            message: props => `${props.value} is not a valid  number!`
        },
    },
    in_stock: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
    },
    categories: {
        type: Array
    },
    brands: [],
    images:[{
        originalname:String,
        mimetype:String,
        buffer:Buffer
    }],
    reviews: [{
        user: {
            // type: ObjectId,
            type:String
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        comment: {
            type: String,
            maxLength: 255,
        },
        created_at: Date,
    }],
    created_by:{
        type:ObjectId,
        ref:"User"
    }
},{
    timestamps:true,
});

module.exports = mongoose.model("Product", ProductSchema)