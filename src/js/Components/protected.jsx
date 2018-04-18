
import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import Messages from './messages.jsx';
import Files from './files.jsx';

import {Route} from 'react-router-dom';

class Protected extends React.Component {	

	render() {
		return (
		<Card>
		<Route path="/protected/messages" component={Messages} />
		<Route path="/protected/files" component={Files} />
		</Card>);
	}
}

export default Protected;
