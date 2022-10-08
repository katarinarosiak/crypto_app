import React from 'react';
import Table from '../dashboard/Table';
import Navbar from '../shared/Navbar';
import SearchBox from '../dashboard/SearchBox';
import Dropdown from './Dropdown';
import CoinsInterface from '../../interfaces/coinsInterface';


interface Props {
  displayedCoins: CoinsInterface | {};
  displayFiatName: string;
  fiatNames: string[];
  filterByFiat: (fiat : string) => void;
  isDropDownOpen: boolean;
  setIsDropDownOpen: unknown;
  pairingNames: string[];
  setIsSearchBoxOpen: unknown;
  isSearchBoxOpen: boolean;
}

const Dashboard: React.FC<Props> = ({ 
  displayedCoins,
  displayFiatName,
  fiatNames,
  filterByFiat,
  isDropDownOpen,
  setIsDropDownOpen,
  pairingNames,
  setIsSearchBoxOpen,
  isSearchBoxOpen,
 }) => {

  return (
    <>
      <div className="App relative z-11">
        <Navbar />
        <div className="min-h-screen text-gray-900 pt-20">
          <div className="flex flex-row flex-wrap justify-center max-w-7xl mx-auto">
            <div className="relative w-full h-full basis-1/5 md:basis-1 mx-10 mt-32">
              <div className="relative z-10">
                <Dropdown 
                  fiatNames={fiatNames}
                  filterByFiat={filterByFiat}
                  displayFiatName={displayFiatName}
                  isDropDownOpen={isDropDownOpen}
                  setIsDropDownOpen={setIsDropDownOpen}/>
              </div>
              <div className="relative z-9">
                <SearchBox pairingNames={pairingNames} setIsSearchBoxOpen={setIsSearchBoxOpen} isSearchBoxOpen={isSearchBoxOpen}/>
              </div>
            </div>
            <main className="mx-10 mt-3 basis-4/5 md:basis-1 text-center grow flex-auto overflow-auto">
              <h1 id="page-title" className="text-4xl text-center font-semibold my-12">Dashboard</h1>
              <Table displayedCoins={displayedCoins} displayFiatName={displayFiatName}/>
            </main>
          </div>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
