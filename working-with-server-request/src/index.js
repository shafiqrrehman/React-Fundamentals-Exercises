import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './Route.js';
ReactDOM.render(<MuiThemeProvider> <Routes /> </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
