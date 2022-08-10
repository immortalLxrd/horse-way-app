import React from 'react';
import HorseWayComponent from "./HorseWayComponent";
import {useDispatch, useSelector} from "react-redux";
import {fetchHorseData} from "../asyncActions/horseData";


const BoardComponent = () => {
	const dispatch = useDispatch();
	const horseData = useSelector(state => state.horseData, (a,b) => JSON.stringify(a) === JSON.stringify(b));

	dispatch(fetchHorseData());

	return (
		<div className='my-8'>
			<ul>
				{horseData?.map((horse, index) => (
					<HorseWayComponent
						key={index}
						horse={horse}
						index={index}
					/>
				))}
			</ul>
		</div>
	);
};


export default BoardComponent;