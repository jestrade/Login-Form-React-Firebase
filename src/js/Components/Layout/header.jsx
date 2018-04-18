
import React from 'react';

import {Link} from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

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
		
			{
				this.props.isAuthenticated ?
				<AppBar 
					title="Mi sitio"
					iconElementRight={<div>
					<Link to="/protected/messages">Messages</Link>
					<Link to="/protected/files">Files</Link>
					<FlatButton onClick={()=>{this.signOut()}} label="LogOut" />
					</div>		
					} 
				/>
				:
				<AppBar title="Mi sitio" />
			}
		</header>);
	}
}

export default Header;
