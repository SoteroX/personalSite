import React from 'react';
import { NavLink } from "react-router-dom";

const PostListItem = (props) => (
	<div>
		<NavLink to={"/blog/" + props.post._id} exact={true}> 
			<p>Title: {props.post.title} </p> 
		</NavLink> 

		<p>Name: {props.post.authorName} </p> 
	</div>
);

export default PostListItem;