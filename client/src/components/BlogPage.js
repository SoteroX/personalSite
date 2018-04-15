import React, { Component } from 'react';
//import AddPost from './AddPost';
import PostList from './PostList';
import { NavLink } from "react-router-dom";

class BlogPage extends Component {
	render() {
		return (
			<div>
				<h1>BlogPage</h1>
				<NavLink to="/blog/new/post" exact={true}>Add Post</NavLink>
				<PostList />
			</div>
		);
	}
};

export default BlogPage;