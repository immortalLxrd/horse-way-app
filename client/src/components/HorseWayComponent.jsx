import React from 'react';
import horseLogo from "../assets/horse-logo.png";


const horseClassColors = ["bg-green-400", "bg-orange-400", "bg-cyan-300", "bg-yellow-300", "bg-purple-400", "bg-red-500"];

const HorseWayComponent = ({horse, index}) => {

	return (
		<li className='mt-8'>
			<div className="flex justify-between mb-1">
				<span className="text-base text-lg font-bold text-black-700">{horse.name}</span>
				<span className="text-sm text-lg font-semibold text-black-700">distance: {horse.distance}</span>
			</div>
			<div className="w-full bg-gray-200 rounded-full h-8">
				<div
					className={[horseClassColors[index], 'h-8', 'rounded-full', 'flex', 'items-center', 'justify-end'].join(' ')}
					style={{width: `${horse.distance / 10}%`}}
				>
					<img className="w-8 h-8 ml-20 block" src={horseLogo} alt=""/>
				</div>
			</div>
		</li>
	)
};


export default HorseWayComponent;