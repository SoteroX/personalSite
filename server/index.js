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
			// Posts	= require('./models/posts');

mongoose.connect("mongodb://localhost/blogs-backend");
mongoose.set("debug", true);
mongoose.Promise = Promise;

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
//app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + '/views'));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
seedDB();


app.get('/', function(req, res){
    res.sendFile("index.html");
});

app.use('/api/posts', postRoutes);



// //get all posts
// app.get("/api/posts", function(req,res){
// 	Posts.find({}, function(err,post){
// 		if(err){
// 			console.log("ERROR FINDING POST")
// 		} else{
// 			console.log(post);
// 		}
// 	});
// 	res.send("Finish");
// });

// //get single post
// app.get("/api/posts/:id", function(req,res){
// 	Posts.findById(req.params.id, function(err, foundPost){
// 		if(err){
// 			console.log('Error finding single post');
// 		} else {
// 			console.log("found single posts: ", foundPost)
// 		}
// 	});
// });

// //add post
// app.post("/api/posts/:id", function(req,res) {

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