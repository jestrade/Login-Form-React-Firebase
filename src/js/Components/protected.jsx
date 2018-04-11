
import React from 'react';

import Messages from './messages.jsx';
import Files from './files.jsx';

import {Route} from 'react-router-dom';

class Protected extends React.Component {	

	render() {
		return (
		<section>
		<p>Protected</p>
		<Route path="/protected/messages" component={Messages} />
		<Route path="/protected/files" component={Files} />
		</section>);
	}
}

export default Protected;
