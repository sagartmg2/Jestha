const express = require('express')
const router = express.Router()

const { signup, login } = require("../controller/user")


router.post("/signup", signup)
router.post("/login", signup)

module.exports = router