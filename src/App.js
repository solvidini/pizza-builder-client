import React from 'react';
import './App.scss';
import axios from 'axios';

import PizzaBuilder from './pages/PizzaBuilder/PizzaBuilder';

function App() {
	// axios
	// 	.get('http://127.0.0.1:8080/users/4')
	// 	.then(response => {
	// 		console.log(response);
	// 	})
	// 	.catch(error => {
	// 		console.log(error);
	// 	});
	return (
		<div className="App">
			<PizzaBuilder />
		</div>
	);
}

export default App;
