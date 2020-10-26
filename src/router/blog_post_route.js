const express = require('express');
const router = express.Router();
const blog=require('../controllers/blog')
const upload=require('../middleware/uploader')


router.post("/uploadBlog",upload.single('image'), blog.CreateBlog);
router.get("/getBlogs",blog.getBlogs)
router.post("/deleteBlog", blog.deleteBlog)
router.post("/updatePost",blog.updatePost)
module.exports = router;