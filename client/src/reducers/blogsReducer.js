import { GET_POSTS, GET_POST, ADD_POST} from '../actions/blogs';

const initialState = {
    posts: [],
    id: "",
    post: []
};

export default function blogsReducer(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            return { ...state, posts: action.data};
        case GET_POST:
            return { ...state, post: action.data}
        case ADD_POST: 
            console.log("action.data", action);
            debugger;
            return { ...state, posts: [...state.posts, action.data]}
        default:
            return state;
    };
}