
const { default: mongoose, Schema } = require("mongoose");

// coonst mongoose

// const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BookSchema = new Schema({
    name: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Book', BookSchema);

// default
// named 
