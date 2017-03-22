import React from 'react';

let logoImage = require('../images/logo.png');

export default class MobileHeader extends React.Component{
	render(){
		return (
			<div id="m-header">
				<header>
					<img src={logoImage} alt="logo"/>
					<span>tag show</span>
				</header>
			</div>
		);
	}
}

