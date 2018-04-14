import React, { Component } from 'react';
import PostList from './PostList';

class BlogPage extends Component {
	render() {
		return (
			<div>
				<h1>BlogPage</h1>
				<PostList />
			</div>
		);
	}
};

export default BlogPage;