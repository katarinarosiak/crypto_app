//@ts-nocheck
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import Navbar from './Navbar';
import CardAverages from './CardAverages';
import CardChanges from './CardChanges';
import { CoinItem } from '../interfaces/coinContextInterface'


interface Prices {
	title: string;
	val: number;
};


const Pairing: React.FC = () => {
	const { id } = useParams();
	const [ coins, setCoins ] = useState([]);
	const [currCoin, setCurrCoin] = useState<CoinItem | {} >({});
	const [ averages, setAverages ] = useState<Prices[]>([]);
	const [ changes, setChanges ] = useState<Prices[]>([]);

	useEffect(() => {
		const item = JSON.parse(localStorage.getItem('coins')!)
		setCoins(item);
	}, [])

	useEffect(() => {

		if (Object.keys(coins).length > 0) {
			let replacedCoin = Object.values(coins).find(coin => {
				const singleCoin = coin as any;
				if ("display_symbol" in singleCoin) {
					return singleCoin["display_symbol"].replace("-", "") === id;
				} else {
					return  false;
				}
			});
			setCurrCoin(replacedCoin ? replacedCoin : {});
		}
}, [currCoin, coins, id])

	useEffect(() => {
		const parseAverages = (data: CoinItem | {}) => {
			if ('averages' in data) {
				const coinData: any = data;
				return [
					{
						title:"Average: day",
						val: coinData['averages']['day']
					},
					{
						title: "Average: week",
						val: coinData['averages']['week']
					},
					{
						title: "Average: month",
						val: coinData['averages']['month']
					},
				];
			} else {
				return [];
			}
		}
		setAverages(parseAverages(currCoin))
	}, [currCoin]);

	useEffect(() => {
		const parseChanges = (data:CoinItem | {}) => {
			if ('averages' in data) {
				const coinData: any = data;
			return [
				{
					title: "Change: day",
					val: [coinData['changes']['percent']['day'], coinData['changes']['price']['day']]
				},
				{
					title: "Change: week",
					val: [coinData['changes']['percent']['week'], coinData['changes']['price']['week']]
				},
				{
					title: "Change: month",
					val: [coinData['changes']['percent']['month'], coinData['changes']['price']['month']]
				},
			];
		} else {
			return [];
		}
	}
		setChanges(parseChanges(currCoin));
	}, [currCoin])
	
	return (
		<div>
			<Navbar />
			<div className="pt-20">
        <h1 className="text-4xl text-center font-semibold m-10">Pairing: <span className="text-style_green">{currCoin['display_symbol']}</span></h1>
      </div>
			<div className="text-center">
				<h2 className="text-gray-600">Last updated: {currCoin? currCoin['display_timestamp'] : ""}</h2>
			</div>
			<div className="grid grid-cols-2 gap-12 md:grid-cols-3 m-20">
				{averages.map(average => {
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