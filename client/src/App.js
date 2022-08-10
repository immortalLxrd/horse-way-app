import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import BoardComponent from "./components/BoardComponent";

const SERVER_URL = 'http://localhost:3002';

const socket = io(SERVER_URL);

function App() {
	const [isConnected, setIsConnected] = useState(socket.connected);
	const [data, setData] = useState(null);

	useEffect(() => {
		socket.on('connect', () => {
			setIsConnected(true);
		});

		socket.on('disconnect', () => {
			setIsConnected(false);
		});

		socket.emit('start');

		return () => {
			socket.off('connect');
			socket.off('disconnect');
		};
	}, []);


	useEffect(() => {
		socket.on('ticker', response => {
			if (JSON.stringify(response) !== JSON.stringify(data)) {
				setData(response);
			}
		});
	}, [data]);


	return (
		<div className='container mx-auto px-4'>
			<h1 className='text-center my-8 text-4xl font-medium'>Horse Betting</h1>
			<BoardComponent data={data}/>
			<p className='text-right'>{isConnected ? 'connected' : 'disconnected'}</p>
		</div>
	);
}

export default App;