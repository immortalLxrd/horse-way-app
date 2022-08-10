import React from 'react';


const horseClassColors = ["bg-green-400", "bg-orange-400", "bg-cyan-300", "bg-yellow-300", "bg-purple-400", "bg-red-500"];

const HorseComponent = ({horse, index}) => {

	return (
		<li className='mt-4'>
			<div className="flex justify-between mb-1">
				<span className="text-base text-4xl font-medium text-black-700">{horse.name}</span>
				<span className="text-sm text-4xl font-medium text-black-700">{horse.distance}</span>
			</div>
			<div className="w-full bg-gray-200 rounded-full h-4">
				<div
					className={[horseClassColors[index], 'h-4', 'rounded-full'].join(' ')}
					style={{width: `${horse.distance / 10}%`}}
				/>
			</div>
		</li>
	)
};


export default HorseComponent;