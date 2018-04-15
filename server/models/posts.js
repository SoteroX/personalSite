const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
		title: String,
		content: String,
		authorId: String,
		authorName: String,
});

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;