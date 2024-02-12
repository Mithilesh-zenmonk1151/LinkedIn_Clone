const express = require("express");
const router= express.Router();
const {
   createPosts,
   getPost
}= require("../controller/posts")
const {auth}= require("../middleware/auth")



router.post("/post",auth, createPosts)
router.get("/get-post",auth, getPost)


module.exports = router
