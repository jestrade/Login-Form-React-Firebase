
import React from 'react';
import Header from './Layout/header.jsx';

import Protected from './protected.jsx';
import Login from './login.jsx';

import Footer from './Layout/footer.jsx';

import {isAuthenticated} from './../api.jsx';

import {BrowserRouter as Router} from 'react-router-dom';

class Main extends React.Component {	
	constructor(){
		super();
		this.state = {
			isAuthenticated:false
		}
		this.authenticate = this.authenticate.bind(this);
		this.logOut = this.logOut.bind(this);
    }
    authenticate(){
    	this.setState({
    		isAuthenticated:true
    	})
    }
    logOut(){
    	this.setState({
    		isAuthenticated:false
    	})
    }
    componentWillMount(){
    	isAuthenticated
    	.then((user)=>{
    		if(user!=null)
    		this.setState({
    			isAuthenticated:true
    		})
    	})
    }
    
    
	render() {
		return (
		<main>
		<Router>
			<div>
				<Header isAuthenticated={this.state.isAuthenticated} logOut={this.logOut} />
					{
					this.state.isAuthenticated ?
						<Protected />
					:
						<Login authenticate={this.authenticate} />
					}
				<Footer />
			</div>
		</Router>
		</main>);
	}
}

export default Main;
