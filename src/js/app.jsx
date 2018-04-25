import './../css/style.scss';
import Main from '../js/Components/main.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';

const store = configureStore();

ReactDOM.render(
        <Provider store={store}>
            <Main />
        </Provider>, document.getElementById('app'));

