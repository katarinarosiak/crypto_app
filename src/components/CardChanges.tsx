import Toggle from "./Toggle";
import { useState } from 'react';

const CardChanges = ({ change }) => {
	const {title, val} = change;

	const [ showingPercent , setShowingPercent ] = useState(true);

	const handleToggle = () => {
		setShowingPercent(!showingPercent);
	}

	return (
	<div className=" w-30 rounded-lg border-solid border-2 h-48 bg-gradient-to-r from-style_blue/30 to-style_green/30">
		<div className="text-right my-4 mr-4">
			<Toggle handleChange={handleToggle}/>
		</div>
		<div className="mt-4 text-center">
			<p className="font-medium text-2xl">{title}</p>
			{
				showingPercent ? 
					<p className="mt-5 text-md font-light">{val[0]} %</p> :
					<p className="mt-5 text-md font-light">{val[1]}</p> 
			}
		</div>
	</div>
	)
}

export default CardChanges;