import React from 'react';
import DisplayProductData from './components/DisplayProductData';
import Login from './components/Login'

const App = () => {
	return (
		<>
			<Login />
			<h1>Slowfood</h1>
			<DisplayProductData />
		</>
	);
}

export default App;
