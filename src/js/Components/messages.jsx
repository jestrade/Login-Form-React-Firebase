
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import {loadData,sendData,deleteData} from './../api.jsx';

class Messages extends React.Component {	
	constructor(){
		super();
		this.state = {
			nombre:'',
			correo:'',
			mensaje:'',
			mensajes:[]
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
    	let mensaje={
    		nombre:this.state.nombre,
    		correo:this.state.correo,
    		mensaje:this.state.mensaje
    	}
    	sendData(mensaje)
    	.then(()=>{
    		this.setState({
    			nombre:'',
    			correo:'',
    			mensaje:''
    			
    		})
    		
    		
    	})
    	 		
    }
    
	removeData(mensajeId){
		deleteData(mensajeId)
	}
	
	componentDidMount(){
		loadData()
		.on('value',(snapshot)=>{
			let datos = snapshot.val();
			let tmp=[];
			for (let dato in datos){
				tmp.push({
					id:dato,
					nombre:datos[dato].nombre,
					correo:datos[dato].correo,
					mensaje:datos[dato].mensaje
				});
			}
			this.setState({
				mensajes:tmp
			});
			
		});
	}
	render() {
		return (
			<section>
				 <CardHeader
				      title="Messages"
				    />
		    
			    <CardTitle title="Please fill the fields"  />
					<CardText>
		
		<form>
		
		<TextField 
				floatingLabelText="Name"
				hintText="Name"
				name="nombre" 
				value={this.state.nombre} 
				onChange={this.handleChange} 
				type="text" /><br />
				
			<TextField 
				floatingLabelText="Email"
				hintText="Email"
				name="correo" 
				value={this.state.correo} 
				onChange={this.handleChange} 
				type="email" /><br />
			
		<TextField 
				floatingLabelText="Mensaje"
				hintText="Mensaje"
				rows={2}
    			rowsMax={4}
				name="mensaje" 
				value={this.state.mensaje} 
				onChange={this.handleChange} /><br />
		
		<RaisedButton 
			label="Send"  
			primary={true}
			onClick={this.handleSubmit}
		/>
		
		</form>
		</CardText>
		
		
	
		<Table>
			<TableHeader>
				<TableRow>
				<TableHeaderColumn>Nombre</TableHeaderColumn>
				<TableHeaderColumn>Correo</TableHeaderColumn>
				<TableHeaderColumn>Mensaje</TableHeaderColumn>
				<TableHeaderColumn>Opciones</TableHeaderColumn>
				</TableRow>
			</TableHeader>
			<TableBody>
				{
					this.state.mensajes.map((dato)=>{
					 return (
						<TableRow key={dato.id}>
							<TableRowColumn>{dato.nombre}</TableRowColumn>
							<TableRowColumn>{dato.correo}</TableRowColumn>
							<TableRowColumn>{dato.mensaje}</TableRowColumn>
							<TableRowColumn>
							<RaisedButton 
								label="Delete"  
								primary={true}
								onClick={()=>{this.removeData(dato.id)}} /></TableRowColumn>
						</TableRow>
						)
					})
					
				}
			</TableBody>
		</Table>
		</section>);
	}
}

export default Messages;
