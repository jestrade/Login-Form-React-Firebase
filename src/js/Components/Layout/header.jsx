
import React from 'react';

import {Link} from 'react-router-dom';

import {logOut} from './../../api.jsx';

class Header extends React.Component {	
	
	signOut(){
		logOut()
		.then(()=>{
			this.props.logOut()
		})
		
	}
	
	render() {
		return (
		<header>
			<h1>Mi sitio</h1>
			{
				this.props.isAuthenticated ?
				<div>
					<ul>
					<li><Link to="/protected/messages">Messages</Link></li>
					<li><Link to="/protected/files">Files</Link></li>
					</ul>
					<p><button onClick={()=>{this.signOut()}}>LogOut</button></p>
				</div>
				:
				<span></span>
			}
		</header>);
	}
}

export default Header;
