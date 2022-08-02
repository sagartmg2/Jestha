
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

const User = require("../model/User")


const signup = async (req, res, next) => {
    try {
        const saltRounds = 10;
        let { name, email, password, role, address, kyc } = req.body

        let hashed_password = await bcrypt.hash(password, saltRounds);

        let user = await User.create({
            name,
            email,
            password: hashed_password,
            role,
            address,
            kyc
        })

        if (user) {
            return res.send(user)
        }
    }
    catch (err) {
        return next(err)
    }

}
const login = async (req, res, next) => {
    const { email, password } = req.body;

    // Load hash from your password DB.
    let user = await User.findOne({ email }).select(["name","password","role"]);
    let status = await bcrypt.compare(password, (user?.password || ""));

    if (!user || !status) {
        return res.status(401).send({
            message: "Invalid Credentials"
        })
    }

    let user_obj = user.toObject();
    delete user_obj.password

    var access_token = jwt.sign(user_obj, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });

    return res.send({
        access_token,
    })

}

// module.exports = signup

module.exports = {
    signup,
    login,
}