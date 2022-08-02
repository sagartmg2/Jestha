const express = require('express')
const router = express.Router()

router.get("", (req, res, next) => {
   res.send("get products")
})

router.get("/:id", (req, res, next) => {
   res.send("get one product")
})

router.post("", (req, res, next) => {
   res.send("products")
})

router.put("/:id", (req, res, next) => {
   res.send(req.params)
})

router.delete("/:id", (req, res, next) => {
   res.send("put one product")
})

module.exports = router