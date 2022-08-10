import {addHorseDataAction} from "../store/horseDataReducer";
import io from "socket.io-client";


const SERVER_URL = 'http://localhost:3002';
const socket = io(SERVER_URL);
socket.connect();
socket.emit('start');


export const fetchHorseData = () => {
	return dispatch => {
		socket.on('ticker', data => {
				dispatch(addHorseDataAction(data));
			}
		);
	}
}