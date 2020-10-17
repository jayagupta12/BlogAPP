const express = require('express');
const router = express.Router();
const blog=require('../controllers/blog')
const upload=require('../middleware/uploader')


router.post("/uploadBlog",upload.single('image'), blog.CreateBlog);
module.exports = router;