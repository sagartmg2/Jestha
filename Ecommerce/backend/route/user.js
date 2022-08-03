const express = require('express')
const router = express.Router()

const { signup, login, getUser } = require("../controller/user")
const { validate_signup, validateAccessToken } = require('../middleware/auth')

router.post("/signup", validate_signup, signup)
router.post("/login", login)
router.get("/get-user", validateAccessToken, getUser)

module.exports = router