// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8,
        select:false,
    },
    address:{
      type:String,  
    },
    role:{
        type:String,
        enum:["buyer","seller"]
    },
    kyc:{
        citizenship_number:String,
    },
});

module.exports  = mongoose.model("User",UserSchema)

// provinces =[
//     {
//         // _id:1
//         id:1,
//         name:"Province1"
//     }
// ]


//     // api/districts/{province_id}

// districts = [
//     {
//         id:40,
//         name:"Kathmandu",
//         province_id:3
//     }
// ]


