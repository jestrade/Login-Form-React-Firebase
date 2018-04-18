
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
		 <Card>
		 <CardHeader
      title="Welcome"
    />
		{
			<p>{this.state.message}</p>
		}	
		<CardTitle title="Please fill the fields"  />
		<CardText>
		<form>
		
			<TextField 
				floatingLabelText="Email"
				hintText="Email"
				name="email" 
				value={this.state.email} 
				onChange={this.handleChange} 
				type="email" /><br />
				
			<TextField 
				floatingLabelText="Password"
				hintText="Password"
				name="password" 
				value={this.state.password} 
				onChange={this.handleChange} 
				type="password" /><br />
			
		<RaisedButton 
			label="Sign in"  
			primary={true}
			onClick={this.handleSubmit}
		/>
		</form>
		</CardText>
		 </Card>);
	}
}

export default Login;
