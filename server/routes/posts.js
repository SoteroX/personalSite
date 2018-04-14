var express = require('express');
var router = express.Router();
var db = require("../models/posts");
var helpers = require("../helpers/posts");

router.route('/')
 .get(helpers.getPosts)
 .post(helpers.createPost)
 
router.route('/:postId')
  .get(helpers.getPost)
  .put(helpers.updatePost)
  .delete(helpers.deletePost)
  
module.exports = router;