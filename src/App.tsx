// @ts-nocheck
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Pairing from "./components/Pairing";
import "./App.css";
import { useEffect, useState } from 'react';
import { fetchData } from "./utils/api";
import CoinContextInterface from '../src/interfaces/coinContextInterface';



// interface PercentPriceOpen {
// 	day: number;
// 	hour: number;
// 	month: number;
// 	month_3: number;
// 	month_6: number;
// 	week: number;
// 	year: number;
// }

// interface Changes {
// 	percent: PercentPriceOpen;
// 	price: PercentPriceOpen;
// 	display_symbol: string;
// 	display_timestamp: string;
// 	high: number;
// 	last: number;
// 	low: number;
// 	open: PercentPriceOpen;
// 	timestamp: number;
// 	volume: number;
// }

// interface Averages {
// 	day: number;
// 	week: number;
// 	month: number;
// }

// interface CoinItem {
// 	ask: number;
// 	averages: Averages;
// 	bid: number;
// 	changes: Changes;
// }

// interface Coins {
// 	[index: string]: CoinItem;
// }

// interface CoinContextInterface {
// 	coins: Coins;
// }

interface FiatContextInterface {

}


export const CoinContext = React.createContext<CoinContextInterface | {}>({});
export const FiatContext = React.createContext<FiatContextInterface | {}>({});


const App: React.FC = () => {
	const [ coins, setCoins ] = useState<CoinContextInterface | {}>({});
	const [ displayFiat, setDisplayFiat ] = useState("Show All");

// if .. in then => error handling 

	useEffect(() => {
		// if (localStorage.getItem('coins') === null || localStorage.getItem('coins').length === 0) {
			fetchData().then((response) => {
				const { data } = response;
				console.log(data);
				setCoins(data);
			}).catch((e) => {
				console.log(e);
				setCoins({})
			});
		// } else {
		// 	setCoins(JSON.parse(localStorage.getItem('coins')))
		// }
	}, []);

	useEffect(() => {
		if (coins !== null && Object.keys(coins).length > 0) {
			localStorage.setItem('coins', JSON.stringify(coins));
		}
	}, [coins])

const updateData = () => {
		fetchData().then((response) => {
			const { data } = response;
			setCoins(data);
			localStorage.setItem('coins', JSON.stringify(coins));
		}).catch((e) => {
		});
	}

  return (
    <div>
			<Router>
				<CoinContext.Provider value={{coins, setCoins}}>
					<FiatContext.Provider value={{displayFiat, setDisplayFiat}}>
						<Routes>
								<Route path="/" element={<Dashboard handleClick={updateData}/>} />
								<Route path="/:id" element={<Pairing />} /> 
						</Routes>
					</FiatContext.Provider>
				</CoinContext.Provider>
			</Router>
    </div>
  );
}

export default App;
