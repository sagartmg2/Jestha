const { default: mongoose, Schema } = require("mongoose");

// coonst mongoose

// const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Book = require("./book")

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        // trim: true,
        // required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    books: {
        type: [ObjectId],
        ref: "Book",
        // validate:[function,"custom"]
        validate: {
            validator: async (value) => {

                let status = true;

                console.log({ value })

                // db.books.find({_id:value})

                // value.forEach(async (el) => {
                //     let exists = await Book.findById(el);
                //     console.log({ exists })
                //     if (!exists) {
                //         status = false
                //     }
                // })

                console.log("111")

                for (let i = 0; i < value.length; i++) {
                    let exists = await Book.findById(value[i]);
                    console.log({ exists })
                    if (!exists) {
                        status = false
                    }
                }

                console.log({ status })

                return status

            },
            message: "value is not valid"
        }
    },
    dob: Date,
});

module.exports = mongoose.model('Author', AuthorSchema);

// default
// named 
