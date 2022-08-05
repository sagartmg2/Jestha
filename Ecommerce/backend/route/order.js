const express = require('express')
const { index, show, store } = require('../controller/order')
const router = express.Router()


const { validateAccessToken } = require('../middleware/auth')

router.get("", validateAccessToken, index)
router.post("", validateAccessToken, store)
router.get("/:id", validateAccessToken, show)

module.exports = router
