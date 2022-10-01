import Toggle from "./Toggle";

const CardChanges = ({ change }) => {
	const {title, val} = change;
	return (
	<div className=" w-30 rounded-lg border-solid border-2 h-42 bg-gradient-to-r from-style_blue/30 to-style_green/30">
		<div className="text-right my-4 mr-4">
			<span className="text-xs mx-3">Percent</span><Toggle /><span className="text-xs mx-3">Price</span>
		</div>
		<div className="mt-4 text-center">
			<p className="font-medium text-2xl">{title}</p>
			<p className="mt-5 text-md font-light">{val[0]}</p>
			<p className="mt-5 text-md font-light">{val[1]}</p>
		</div>
	</div>
	)
}

export default CardChanges;