import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/blogs';
import PostListItem from './PostListItem';
import { Route, Link } from "react-router-dom";


class PostList extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		this.props.getPosts();
	}

	render(){
		return(
			<div>
				{console.log('post', this.props.posts)}
				<h1>Welcome to the App!</h1>
				{this.props.posts.map(post => {
					return <PostListItem 
						key={post._id}
						post={post}
					/>
				})}
			</div>
		);
	}
};

function mapStateToProps(reduxState){
	return {
		posts: reduxState.posts
	};
}

export default connect(mapStateToProps, {getPosts} )(PostList);