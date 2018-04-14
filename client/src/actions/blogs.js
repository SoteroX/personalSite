export const GET_POSTS = "GET_POSTS";

function handlePosts(data){
	return {
		type: GET_POSTS,
		data
	};
};

export function getPosts() {
	return dispatch => {
		return fetch("http://localhost:3000/api/posts")
			.then(res => res.json())
			.then(data => dispatch(handlePosts(data)))
			.catch(err => dispatch(err));
	}
}