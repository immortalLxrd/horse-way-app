import React from 'react';

const horseClassColors = ["bg-blue-600", "bg-green-600", "bg-lime-600", "bg-purple-600", "bg-fuchsia-600", "bg-red-600"];

const HorseComponent = ({horse, index}) => {

	return (
		<li className='mt-4'>
			<div className="flex justify-between mb-1">
				<span className="text-base font-medium text-blue-700 dark:text-white">{horse.name}</span>
				<span className="text-sm font-medium text-blue-700 dark:text-white">{horse.distance}</span>
			</div>
			<div className="w-full bg-gray-200 rounded-full h-4 dark:bg-gray-700">
				<div
					className={[horseClassColors[index], 'h-4', 'rounded-full'].join(' ')}
					style={{width: `${horse.distance / 10}%`}}
				/>
			</div>
		</li>
	)
};

export default HorseComponent;