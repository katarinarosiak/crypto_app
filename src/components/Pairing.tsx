import React from 'react'
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import CardAverages from './CardAverages';
import CardChanges from './CardChanges';


const Pairing = () => {
	const { id } = useParams();
	const  coins = JSON.parse(localStorage.getItem('coins'));
	const currCoin = Object.values(coins).find(coin => coin["display_symbol"].replace("-", "") === id);
	
	const parseAverages = (data) => {
		return [
			{
				title:"Average: day",
				val: data['averages']['day']
			},
			{
				title: "Average: week",
				val: data['averages']['week']
			},
			{
				title: "Average: month",
				val: data['averages']['month']
			},
		];
	}

	const averages = React.useMemo(
		() => parseAverages(currCoin),
		[currCoin]
	);
	
	const parseChanges = (data) => {

		return [
			{
				title: "Change: day",
				val: [data['changes']['percent']['day'], data['changes']['price']['day']]
			},
			{
				title: "Change: week",
			  val: [data['changes']['percent']['week'], data['changes']['price']['week']]
			},
			{
				title: "Change: month",
				val: [data['changes']['percent']['month'], data['changes']['price']['month']]
			},
		];
	}

	const changes = React.useMemo(
		() => parseChanges(currCoin),
		[currCoin]
	); 


	return (
		<div>
			<Navbar />
			<div className="pt-20">
        <h1 className="text-4xl text-center font-semibold m-10">Pairing: {currCoin['display_symbol']}</h1>
      </div>
			<div className="text-center">
				<h2>{currCoin['display_timestamp']}</h2>
			</div>
			<div className="grid grid-cols-2 gap-12 md:grid-cols-3 m-20">
				{averages.map(average => {
					console.log(average);
					return (
						<CardAverages average={average}/>
					)
				})}
				{changes.map(change => {
					return (
						<CardChanges change={change} />
					)
				})}
			</div>
		</div>
	)
}

export default Pairing