/**
 * 入口js文件
 * Created by ruixi on 2017/4/11.
 */

'use strict';

require("./index.css");
import React from 'react';
import ReactDOM from 'react-dom';
import List from './script/list.js';

export default class App extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render(){
		return (
		<div className='index-body'>
			<List/>
		</div>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById("app")
);
