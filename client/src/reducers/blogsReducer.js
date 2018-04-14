import { GET_POSTS } from '../actions/blogs';

const initialState = {
    posts: []
};

export default function blogsReducer(state = initialState, action){
    switch(action.type){
        case GET_POSTS:
            return { ...state, posts: action.data};
        default:
            return state;
    };
}