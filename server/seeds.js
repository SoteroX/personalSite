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
    //Remove all posts
    Posts.remove({}, function(err){
        if(err){
            console.log("ERROR...Posts couldnt be removed");
        } else {
           console.log("All post removed!"); 
        }
        //ADD FEW posts
        data.forEach(function(seed){
            Posts.create(seed, function(err, post){
                if(err){
                    console.log(err);
                } else {
                    console.log("Posts Added");
                }
            });
        });
    });
    
}

module.exports = seedDB;

