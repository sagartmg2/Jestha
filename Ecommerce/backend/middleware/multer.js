const multer = require('multer');
const upload = multer({});

module.exports = upload.array("photos",12);