import React from "react";
import {useState, useEffect, useMemo} from 'react';
// import { fetchData } from "../utils/api";
import Input from "./Input";
import Table from "./Table";
import Navbar from "./Navbar";
import { useContext } from 'react';
import { CoinContext } from '../App';
import { Dropdown } from './Dropdown';
import SearchBox from "./SearchBox";


const Dashboard = () => {

	// const [ coins, setCoins ] = useState([]);

	
	const { coins, setCoins } = useContext(CoinContext);
 
	// useEffect(() => {
	// 	fetchData().then((response) => {
	// 		const coinsParsed = Object.entries(response.data).map(coin => [`${coin[0].slice(0,3)}/${coin[0].slice(3)}`, coin[1]]);
	// 		setCoins(coinsParsed);

	// 	});
	// }, []);lg:px-8 sm:px-6 px-4 max-w-6xl mx-auto


  return (
    <>
      <div className="App" style={{ height: "100%" }}>
				<Navbar />
        <div className="min-h-screen text-gray-900 pt-20">
					<div className="">
						<h1 className="text-4xl text-center font-semibold my-10">Dashboard</h1>
					</div>
					<div className="flex flex-row flex-wrap justify-center max-w-7xl mx-auto">
						<div className="basis-1/5 md:basis-1 mx-10">
							<div>
								<Dropdown />
							</div>
							<div>
								<SearchBox />
							</div> 
						</div>
						<main className="mx-10 basis-4/5 md:basis-1 text-center grow flex-auto overflow-auto">
									<Table />
						</main>
					</div>
      </div>
		</div>
    </>
  );
};

export default Dashboard;
