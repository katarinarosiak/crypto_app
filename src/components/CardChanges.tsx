import Toggle from "./Toggle";
import { useState } from 'react';

interface Change {
	title: string;
	val: any[];
}

interface Props {
	change: Change
}

const CardChanges: React.FC<Props> = ({ change }) => {
	const {title, val} = change;

	const [ showingPercent , setShowingPercent ] = useState<boolean>(true);

	const handleToggle = (): void => {
		setShowingPercent(!showingPercent);
	}

	return (
	<div className=" w-30 rounded-lg border-solid h-48 bg-gradient-to-r from-style_blue/30 to-style_green/30 drop-shadow-lg">
		<div className="text-right my-4 mr-4">
			<Toggle handleChange={handleToggle}/>
		</div>
		<div className="mt-4 text-center">
			<p className="font-medium text-2xl">{title}</p>
			{
				showingPercent ? 
					<p className={val[0] >= 0 ? "mt-5 text-md font-light" : "mt-5 text-md font-light text-style_red"}>{val[0]} %</p> :
					<p className="mt-5 text-md font-light">{val[1]}</p> 
			}
		</div>
	</div>
	)
}

export default CardChanges;