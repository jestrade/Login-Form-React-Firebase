

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {uploadFile} from './../api.jsx';

class Files extends React.Component {	
	constructor(){
		super();
		this.state = {
			file:'',
			imagen:''
		}
		this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e) {
    			
		this.setState({
			file:e.target.files[0]
		});
    	
    	let reader = new FileReader();
    	
    	reader.onloadend = () => {			
    		this.setState({
    			imagen:reader.result
    		});
		}
		reader.readAsDataURL(e.target.files[0]);
    	
    	
    }
    
    handleSubmit(e){
    	e.preventDefault();
    	
    	uploadFile(this.state.file)		
		.then(()=>{
			this.setState({
				file:'',
				imagen:''
			})
		})
    	
    }
    
	render() {
		return (
		<section>
		
		<CardTitle title="Upload file"  />
		<CardText>
		
		<form>
			<TextField 
				name="file" 
				onChange={this.handleChange} 
				type="file"
				accept="image/*"
				/><br />
				{
				this.state.imagen !=='' ?
				<p><img src={this.state.imagen} /></p>
				:
				<span></span>
				}
			<br />
			<RaisedButton 
			label="Upload"  
			primary={true}
			onClick={this.handleSubmit}
			/>
		</form>
		</CardText>
		</section>);
	}
}

export default Files;
