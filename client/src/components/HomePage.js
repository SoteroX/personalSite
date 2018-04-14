import React from 'react';
import Particles from 'react-particles-js';
import GreetBox from './GreetBox';



class HomePage extends React.Component {
	render(){
		return(
			<div className="page-background">
				<GreetBox />
				<button>Read On</button>
			</div>
		);
	};
};

export default HomePage;