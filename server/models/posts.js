const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
		title: String,
		categories: [String],
		content: String,
		authorId: String,
		autherName: String,
});

const Posts = mongoose.model('Posts', postSchema);
module.exports = Posts;