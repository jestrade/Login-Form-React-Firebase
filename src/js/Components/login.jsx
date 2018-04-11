
import React from 'react';

import {logIn} from './../api.jsx';

class Login extends React.Component {	
	constructor(){
		super();
		this.state = {
			email:'',
			password:'',
			message:''
		}
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    
    handleSubmit(e){
    	e.preventDefault();
    	const user = {
    		email:this.state.email,
    		password:this.state.password
    	}
    	logIn(user)
    	.then(()=>{
    		this.props.authenticate()	
    	})
    	.catch((error)=>{
    		this.setState({
    			message:error.message
    		})
    	})
    	
    }
    
	render() {
		return (
		<section>
		<h2>Login</h2>
		{
			<p>{this.state.message}</p>
		}	
		<form onSubmit={this.handleSubmit}>
			<p><label>Email</label>
			<input 
				name="email" 
				value={this.state.email} 
				onChange={this.handleChange} 
				type="email" /></p>
				
			<p><label>Password</label>
			<input 
				name="password" 
				value={this.state.password} 
				onChange={this.handleChange} 
				type="password" /></p>
			
		
			<p><button>Entrar</button></p>
		</form>
		</section>);
	}
}

export default Login;
