var mongoose    = require("mongoose");
var Posts  = require("./models/posts");

var data = [
        {
            title: "random title 1",
            categories: ["web", 'react', 'redux'],
            content: "gddhfffhsfhfghgfmhkgfmhsfkhmhgkfsh",
            authorId: "123456",
            authorName: "Sotero",
        },
        {
            title: "random title 2",
            categories: ["hat", 'cat', 'redux'],
            content: "gddhfffhfdfgdkfhmsdfkmskhmfkmdkfhfghgfmhkgfmhsfkhmhgkfsh",
            authorId: "12",
            authorrName: "test",
        },
    ]

function seedDB(){
    //Remove all campgrounds
    Posts.remove({}, function(err){
        if(err){
            console.log("ERROR...Posts couldnt be removed");
        } else {
           console.log("Posts campgrounds!"); 
        }
        //ADD FEW CAMPGROUNDS
        data.forEach(function(seed){
            Posts.create(seed, function(err, post){
                if(err){
                    console.log(err);
                } else {
                    console.log("Posts Added");
                    // //ADD Few Comments
                    // Comment.create(
                    //     {
                    //         text: "This place is great",
                    //         author: "Homer"
                    //     }, function(err, comment){
                    //         if(err){
                    //             console.log(err);
                    //         } else {
                    //             campground.comments.push(comment);
                    //             campground.save();
                    //             console.log("Created new comment");
                    //         }
                    //     });
                }
            });
        });
    });
    
}

module.exports = seedDB;

