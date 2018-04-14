import React from 'react';
import { Link } from "react-router-dom";

const PostListItem = (props) => (
	<div>
		<Link to={"/blog/" + props.post._id}> 
			<p>Title: {props.post.title} </p> 
		</Link> 

		<p>Name: {props.post.authorName} </p> 
	</div>
);

export default PostListItem;