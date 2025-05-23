import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'; // Router is here
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Router>
		<App />
	</Router>
);
