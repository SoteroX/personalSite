import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from '../components/HomePage';
import BlogPage from '../components/BlogPage';
import NavBar from '../components/NavBar';
import PostList from '..//components/PostList';
import * as actions from '../actions/blogs';

class AppRouter extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
				<div>
					<NavBar />
					<Switch>
						<Route path="/" component={HomePage} exact={true} />
						<Route path='/blog' component={BlogPage} exact={true} />
					</Switch>
				</div>
		);
	}
};

export default AppRouter;