import React from 'react';
import { Link } from 'react-router-dom';

const PostListItem = ({id, content, title, authorName}) => (
	<div>
		<Link to={`/api/posts/edit/${id}`}>
			<h3>title {title}</h3>
		</Link>
		<p>Name: {authorName}</p>
		<p>content: {content}</p>
	</div>
);

export default PostListItem;