
import {loadData,sendData,deleteData} from './../api.jsx';
import React from 'react';

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
		<h2>Enviar mensaje</h2>
		
		<form onSubmit={this.handleSubmit}>
			<p><label>Nombre</label>
			<input 
				name="nombre" 
				value={this.state.nombre} 
				onChange={this.handleChange} 
				type="text" /></p>
				
			<p><label>Correo</label>
			<input 
				name="correo" 
				value={this.state.correo} 
				onChange={this.handleChange} 
				type="email" /></p>
			
			<p><label>Mensaje</label>
			<textarea name="mensaje" 
				value={this.state.mensaje} 
				onChange={this.handleChange}></textarea></p>
			<p><button>Enviar</button></p>
		</form>
		<h2>Mensajes enviados</h2>
		<table>
			<thead>
				<tr>
				<th>Nombre</th>
				<th>Correo</th>
				<th>Mensaje</th>
				<th>Opciones</th>
				</tr>
			</thead>
			<tbody>
				{
					this.state.mensajes.map((dato)=>{
					 return (
						<tr key={dato.id}>
							<td>{dato.nombre}</td>
							<td>{dato.correo}</td>
							<td>{dato.mensaje}</td>
							<td><button onClick={()=>{this.removeData(dato.id)}}>Eliminar</button></td>
						</tr>
						)
					})
					
				}
			</tbody>
		</table>
		</section>);
	}
}

export default Messages;
