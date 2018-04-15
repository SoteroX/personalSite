import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../actions/blogs';
import PostListItem from './PostListItem';



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
				{this.props.posts.map((post, index) => {
					return <PostListItem 
						key={index}
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