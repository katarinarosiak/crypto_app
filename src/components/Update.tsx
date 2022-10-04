// @ts-nocheck
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { CoinContext } from '../App';
import  CoinContextInterface from '../interfaces/coinContextInterface'

interface Props {
	handleClick: () => void;
}

const Update: React.FC<Props> = ({ handleClick }) => {
	//coins should't be null
	const coinsData = useContext(CoinContext) //as CoinContextInterface;
	const [ displayTime, setDisplayTime ] = useState<string>("");

	useEffect(() => {
		if ('coins' in coinsData) {
			const vals = Object.values(coinsData.coins);
			if (vals[0]) {
				setDisplayTime(vals[0].display_timestamp);
			}
		} else {
			setDisplayTime("");
		}
	}, [coinsData])

	return (
		<div className="relative flex mb-6 mt-3">
			<div className="relative flex-auto w-20">
				<button 
					className="rounded opacity-70 bg-gradient-to-r from-style_green to-style_blue p-3 text-white h-11 drop-shadow-lg"
					onClick={() => handleClick()}
					>Update</button>
			</div>
			<div className="relative flex-auto w-30 mt-7">
				<p className="text-xs text-gray-600">Lastly updated: {Date().match(/\d\d:\d\d:\d\d/g)}</p>
			</div>
		</div>
	)
}

export default Update;