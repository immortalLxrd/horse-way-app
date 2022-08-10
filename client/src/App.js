import React from 'react';
import BoardComponent from "./components/BoardComponent";

const App = () => {

	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-center my-8 text-4xl font-medium'>Horse Betting</h1>
			<BoardComponent/>
		</div>
	);
};

export default App;