import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => (
	<header>
		<NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink>
		<NavLink to='/blog' activeClassName='is-active' exact={true}>Blog</NavLink>
	</header>
);

export default NavBar;