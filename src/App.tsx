import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Pairing from './components/Pairing';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchData } from './utils/api';
import CoinContextInterface from '../src/interfaces/coinContextInterface';
import { FiatContextInterface } from '../src/interfaces/interfaces';

export const CoinContext = React.createContext<CoinContextInterface | {}>({});
export const FiatContext = React.createContext<FiatContextInterface | {}>({});


const App: React.FC = () => {
	const [ coins, setCoins ] = useState<CoinContextInterface | {}>({});
	const [ displayFiat, setDisplayFiat ] = useState<string>("Show All");

	useEffect(() => {
		fetchData().then((response) => {
			const { data } = response;
			setCoins(data);
		}).catch((e) => {
			console.log(e);
			setCoins({})
		});
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
