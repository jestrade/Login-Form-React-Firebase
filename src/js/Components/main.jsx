
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Layout/header.jsx';

import Messages from './messages.jsx';

import Footer from './Layout/footer.jsx';

import {BrowserRouter as Router} from 'react-router-dom';

class Main extends React.Component {	
	constructor(){
		super();
    }
    
	render() {
		return (
		<MuiThemeProvider>
			<div>
				<Header />
		
				<Messages />
					
				<Footer />
			</div>	
		</MuiThemeProvider>);
	}
}

export default Main;
