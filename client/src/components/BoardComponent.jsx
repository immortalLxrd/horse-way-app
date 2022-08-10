import React from 'react';
import HorseComponent from "./HorseComponent";

const BoardComponent = ({data}) => {
	return (
		<div className='my-8'>
			<ul>
				{data?.map((horse, index) => (
					<HorseComponent
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