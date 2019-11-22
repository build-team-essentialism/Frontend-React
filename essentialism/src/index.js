// REACT
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// COMPONENTS
import App from './App';

// STYLING
import './index.css';

ReactDOM.render(
    <Router>
        <App /> 
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();
