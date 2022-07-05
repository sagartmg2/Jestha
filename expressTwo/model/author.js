const { default: mongoose, Schema } = require("mongoose");

// coonst mongoose

// const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim:true,
        required: true,
        unique:true,
    },
    role:{
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    books:{
        type:[ObjectId],
        ref:"books"
    },
    dob: Date,
});

module.exports = mongoose.model('Author', AuthorSchema);

// default
// named 
