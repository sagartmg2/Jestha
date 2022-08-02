const express = require('express')
const router = express.Router()

const { signup, login } = require("../controller/user")
const { validate_signup } = require('../middleware/auth')


router.post("/signup", validate_signup,signup)
router.post("/login", login)

module.exports = router