import React from 'react';
import Particles from 'react-particles-js';



const particlesOption = {
	particles: {
		number: {
			value:90,
			density: {
				enable: true,
				value_are: 800
			}
		}
	}
};

class HomePage extends React.Component {
	render(){
		return(
			<div>
			<Particles className="particles"
               params={particlesOption}
            />
            <h1 className="test">HomePage</h1>
			</div>
		);
	};
};

export default HomePage;