import { createStore, combineReducers } from 'redux';
import blogsReducer from '../reducers/blogs';

export default () => {
	//store creation
	const store = createStore(
		combineReducers({
			blogs: blogsReducer
		}),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
	return store;
};