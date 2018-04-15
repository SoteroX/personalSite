import axios from 'axios';

export const GET_POSTS = "GET_POSTS";
export const GET_POST = 'GET_POST';
export const ADD_POST = 'ADD_POST';

function handlePosts(data){
	return {
		type: GET_POSTS,
		data
	};
};

function handlePost(data){
	return {
		type: GET_POST,
		data
	};
}

function handleAdd(data){
	console.log("handleAdd data", data);
	return {
		type: 'ADD_POST',
		data
	};
}

// export function addPost(post){
// 	console.log("data being passed", post);
// 	const text = JSON.stringify({post});

// 	// const request = axios.post('http://localhost:3000/api/posts',post);
// 	// request
// 	// .then(res => handleAdd(res))
// 	// .catch(err => console.log("ERROR", err));


// 	return dispatch => {
// 		const request = axios.post('http://localhost:3000/api/posts',{
// 			body: {
// 				title: "hello"
// 			}
// 		})
// 		//.then(res => console.log("res: ",res))
// 		.then(res => dispatch(handleAdd(res)))
// 		.catch(err => console.log(err))

// 	// return {
// 	// 	type: ADD_POST,
// 	// 	payload: 
// 	// };
// }}

export function addPost(task){
	console.log("data being passed", task);
	const jsonData = JSON.stringify(task);
	return dispatch => {
		return fetch("http://localhost:3000/api/posts", {
			method: "POST",
			headers: new Headers({
				"Content-Type": "application/json"
			}),
			body: jsonData
		})
		.then((res) => res.json())
		.then(data => dispatch(handleAdd(data), console.log("data in dispatch handleAdd", data)))
		.catch(err => dispatch(err));
	}
}

export function getPost(id){
	return dispatch => {
		return fetch(`http://localhost:3000/api/posts/${id}`)
		.then(res => res.json())
		.then(data => dispatch(handlePost(data)))
		.catch(err => dispatch(err));
	}
}

export function getPosts() {
	return dispatch => {
		return fetch("http://localhost:3000/api/posts")
			.then(res => res.json())
			.then(data => dispatch(handlePosts(data)))
			.catch(err => dispatch(err));
	}
}
