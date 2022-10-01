import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Pairing from "./components/Pairing";
import "./App.css";
import { useEffect, useState } from 'react';
import { fetchData } from "./utils/api";


export const CoinContext = React.createContext(null);

function App() {
	const [ coins, setCoins ] = useState({});

	useEffect(() => {
		if (localStorage.getItem('coins') === null || localStorage.getItem('coins').length === 0) {

			fetchData().then((response) => {
				// const coinsParsed = Object.entries(response.data).map(coin => [`${coin[0].slice(0,3)}/${coin[0].slice(3)}`, coin[1]]);
				const { data } = response;
				setCoins(data);
			});
		} else {
			setCoins(JSON.parse(localStorage.getItem('coins')))
		}
	}, []);

	useEffect(() => {
		if (Object.keys(coins).length > 0) {
			localStorage.setItem('coins', JSON.stringify(coins));
		}
	}, [coins])


  return (
    <div>
			<Router>
				<CoinContext.Provider value={{coins, setCoins}}>
					<Routes>
							<Route path="/" element={<Dashboard />} />
							<Route path="/:id" element={<Pairing />} /> 
					</Routes>
				</CoinContext.Provider>
			</Router>
    </div>
  );
}

export default App;
