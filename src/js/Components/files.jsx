

import React from 'react';
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
		<h2>Cargar archivo</h2>
		
		<form onSubmit={this.handleSubmit}>
			<p><label>Archivo</label>
			<input 
				name="file" 
				onChange={this.handleChange} 
				type="file"
				accept="image/*"
				/></p>
				{
				this.state.imagen !=='' ?
				<p><img src={this.state.imagen} /></p>
				:
				<span></span>
				}
			<p><button>Enviar</button></p>
		</form>
		</section>);
	}
}

export default Files;
