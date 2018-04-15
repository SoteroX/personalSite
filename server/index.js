const express = require('express'),
			app			= express(),
			methodOverride   = require("method-override"),
    	expressSanitizer = require("express-sanitizer"),
			morgan	= require('morgan'),
			bodyParser	= require('body-parser'),
			cors		= require('cors'),
			mongoose = require('mongoose'),
			seedDB	= require('./seeds'),
			postRoutes = require('./routes/posts');
		    //Posts	= require('./models/posts');

mongoose.connect("mongodb://localhost/blogs-backend");
mongoose.set("debug", true);
mongoose.Promise = Promise;

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/views'));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
seedDB();

// allow-cors
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  })


app.use('/api/posts', postRoutes);



// //get all posts
// app.get("/api/posts", function(req,res){
// 	Posts.find({}, function(err,post){
// 		if(err){
// 			console.log("ERROR FINDING POST")
// 		}
// 	})
// 	.then(post => res.send(post))
// 	.catch(err => console.log('Err:',err));
// });

// //get single post
// app.get("/api/posts/:id", function(req,res){
// 	Posts.findById(req.params.id, function(err, foundPost){
// 		if(err){
// 			console.log('Error finding single post');
// 		}
// 	})
// 	.then(foundPost => res.send(foundPost))
// 	.catch(err => console.log('Err:',err));
// });

// //add post
// app.post("/api/posts", function(req,res) {
// 	console.log("REq body", req.body)
// 	Posts.create(req.body.post, function(err, newPost){
// 		if(err){
// 			console.log('err', err)
// 		} else { 
// 			res.redirect('/api/posts')
// 		}
// 	})	
// });

// //edit post
// app.get('/api/posts/:id/edit', function(req,res){
// 	Posts.findById(req.params.id, function(err,foundPost){
// 		if(err){
// 			console.log("Error editing post");
// 		} else {
// 			console.log("Edit post is: ", foundPost);
// 		}
// 	})
// });

// //delete post
// app.delete('/api/posts/:id', function(req,res){
// 	Posts.findByIdAndRemove(req.params.id, function(err){
// 		if (err) {
// 			console.log("Couldn't delete Post");
// 		} else {
// 			console.log('Post was deleted');
// 		}
// 	})
// });


app.listen(3000, () => {
	console.log("Server is running");
});