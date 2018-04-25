
import React from 'react';

import {CardHeader, CardTitle, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { connect } from 'react-redux';
import { loadMessages, deleteMessage, createMessage } from './../actions/messages.jsx';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Messages extends React.Component {	
	constructor(){
		super();
		this.state = {
			name:'',
			email:'',
			message:'',
			messages:[]
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
    	let message={
    		name:this.state.name,
    		email:this.state.email,
    		message:this.state.message
    	}
		this.props.sendData(message);
    	this.setState({
			name:'',
			email:'',
			message:'',	
    	})
    	 		
    }
    
	removeData(messageId){
		this.props.deleteData(messageId);
	}
	
	componentDidMount(){
		this.props.loadData();
	}
	
	render() {
		return (
			<section>
			
				 <CardHeader
				      title="Messages"
				    />
		
		
		 
		    
			    <CardTitle title="Send a new message"  />
					<CardText>
		
		
		
		
		<form>
		
		<TextField 
				floatingLabelText="Name"
				hintText="Name"
				name="name" 
				value={this.state.name} 
				onChange={this.handleChange} 
				type="text" /><br />
				
			<TextField 
				floatingLabelText="Email"
				hintText="Email"
				name="email" 
				value={this.state.email} 
				onChange={this.handleChange} 
				type="email" /><br />
			
		<TextField 
				floatingLabelText="Mensaje"
				hintText="Mensaje"
				rows={2}
    			rowsMax={4}
				name="message" 
				value={this.state.message} 
				onChange={this.handleChange} /><br />
		
		<RaisedButton 
			label="Send"  
			primary={true}
			onClick={this.handleSubmit}
		/>
		
		</form>
		</CardText>
		
		
	
		<Table>
			<TableHeader
				displaySelectAll={false}
	            adjustForCheckbox={false}
	            enableSelectAll={false}
			>
				<TableRow>
				<TableHeaderColumn>Nombre</TableHeaderColumn>
				<TableHeaderColumn>Correo</TableHeaderColumn>
				<TableHeaderColumn>Mensaje</TableHeaderColumn>
				<TableHeaderColumn>Opciones</TableHeaderColumn>
				</TableRow>
			</TableHeader>
			<TableBody 
				displayRowCheckbox={false}
			>
				{
					this.props.messages.map((message)=>{
					 return (
						<TableRow key={message.id}>
							<TableRowColumn>{message.name}</TableRowColumn>
							<TableRowColumn>{message.email}</TableRowColumn>
							<TableRowColumn>{message.message}</TableRowColumn>
							<TableRowColumn>
							<RaisedButton 
								label="Delete"  
								primary={true}
								onClick={()=>{this.removeData(message.id)}} /></TableRowColumn>
						</TableRow>
						)
					})
					
				}
			</TableBody>
		</Table>
		</section>);
	}
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        message: state.message,
        messageId: state.messageId
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadData:()=>dispatch(loadMessages()),
        deleteData:(messageId)=>dispatch(deleteMessage(messageId)),
        sendData:(message)=>dispatch(createMessage(message))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
