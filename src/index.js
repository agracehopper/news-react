import 'core-js/fn/object/assign';
import 'antd/dist/antd.css';
import './styles/App.less';
import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import {Router,Route,hashHistory} from 'react-router';
import PCIndex from './components/pcIndex';
import MobileIndex from './components/mobileIndex';

export default class AppComponent extends React.Component {
	
	render() {
		return (
		  <div>
		  	<MediaQuery query='(min-device-width: 1224px)'>
		  		<PCIndex/>
		  	</MediaQuery>
		  	<MediaQuery query='(max-device-width: 1224px)'>
		  		<MobileIndex/>
		  	</MediaQuery>
		  </div>
		);
	}
}

ReactDOM.render(<AppComponent />, document.getElementById('app'));
