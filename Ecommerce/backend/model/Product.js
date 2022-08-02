const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Decimal128,
        requried:true,
    },
    in_stock:{
        type:Number,
        default:0
    },
    description:{
        type:String,
    },
    brands:{
        type:Array,
    },
    categories:{
        type:Array
    }
});

module.exports  = mongoose.model("Product",ProductSchema)