import React from 'react'

const CardAverages = ({ average }) => {
	const {title, val} = average;
	return (
	<div className="text-center w-30 rounded-lg border-solid border-2 h-40 bg-gradient-to-r from-style_blue/30 to-style_green/30">
		<div className="mt-8">
			<p className="font-medium text-2xl">{title}</p>
			<p className="mt-5 text-md font-light">{val}</p>
		</div>
	</div>
	)
}

export default CardAverages;