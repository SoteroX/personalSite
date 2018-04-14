var db = require('../models/posts');

exports.getPosts = function(req, res){
    db.find()
    .then(function(post){
        res.json(post);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createPost = function(req, res){
  db.create(req.body)
  .then(function(newPost){
      res.status(201).json(newPost);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getPost = function(req, res){
   db.findById(req.params.postId)
   .then(function(foundPost){
       res.json(foundPost);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updatePost =  function(req, res){
   db.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
   .then(function(post){
       res.json(post);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deletePost = function(req, res){
   db.remove({_id: req.params.postId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;