import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => (
		<ul className="navbar">
		<header>
			<li><NavLink to='/' activeClassName='is-active' exact={true}>Home</NavLink></li>
			<li><NavLink to='/blog' activeClassName='is-active' exact={true}>Blog</NavLink></li>
		</header>
		</ul>

);

export default NavBar;