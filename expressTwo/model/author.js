const { default: mongoose, Schema } = require("mongoose");

// coonst mongoose

// const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AuthorSchema = new Schema({
    name: String,
    email: String,
    dob: Date
});

module.exports = mongoose.model('Author', AuthorSchema);

// default
// named 
