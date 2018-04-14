import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import HomePage from '../components/HomePage';
import BlogPage from '../components/BlogPage';
import NavBar from '../components/NavBar';
import PostPage from '../components/PostPage';
import PostList from '../components/PostList';

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
						<Route path='/blog/:id' component={PostPage} exact={true} />
					</Switch>
				</div>
		);
	}
};

export default AppRouter;