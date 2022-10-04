import React from "react";
import {useState, useEffect, useMemo} from 'react';
import Table from "./Table";
import Navbar from "./Navbar";
import { useContext } from 'react';
import { CoinContext } from '../App';
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";
import Update from "./Update";
import Dropdownlist from "../components/DropdownList";


interface Props {
	handleClick: () => void;
}

const Dashboard: React.FC<Props> = ({ handleClick }) => {

  return (
    <>
      <div className="App" style={{ height: "100%" }}>
				<Navbar />
        <div className="min-h-screen text-gray-900 pt-20">
					<div className="flex flex-row flex-wrap justify-center max-w-7xl mx-auto">
						<div className="relative w-full h-full basis-1/5 md:basis-1 mx-10 mt-9">
							<div className="relative z-8">
								<Update handleClick={handleClick}/>
							</div> 
							<div className="relative z-10">
								{/* <Dropdownlist /> */}
								<Dropdown />
							</div>
							<div className="relative z-9">
								<SearchBox />
							</div>
						</div>
						<main className="mx-10 mt-3 basis-4/5 md:basis-1 text-center grow flex-auto overflow-auto">
							<h1 className="text-4xl text-center font-semibold my-10">Dashboard</h1>
							<Table />
						</main>
					</div>
      </div>
		</div>
    </>
  );
};

export default Dashboard;
