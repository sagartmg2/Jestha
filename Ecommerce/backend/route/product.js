const express = require('express')
const { index, sellerIndex, show, store, update, deleteProduct, updateReview } = require('../controller/product')
const router = express.Router()


const multer_arr_upload = require("../middleware/multer")
const { validateAccessToken } = require('../middleware/auth')


router.get("", index)
router.get("/sellers", validateAccessToken, sellerIndex)
router.get("/:id", show)
router.post("/", validateAccessToken, multer_arr_upload, store)
router.put("/:id", validateAccessToken, multer_arr_upload, update)
router.delete("/:id", validateAccessToken, deleteProduct)

module.exports = router