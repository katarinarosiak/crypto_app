import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Pairing from './components/Pairing';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchData } from './utils/api';
import CoinsInterface from './interfaces/coinsInterface';
import { filterFiats, getFiatNames, getPairingNames } from './utils/helpers';


const App: React.FC = () => {
  const [ coins, setCoins ] = useState<CoinsInterface | {}>({}); //{BCD:{}, BCD:{}}
  const [ displayedCoins, setDisplayedCoins ] = useState<CoinsInterface | {}>({});
  const [ displayFiatName, setDisplayFiatName ] = useState<string>("Show All"); 
  const [ fiatNames, setFiatNames ] = useState<string[]>([]); 
  const [ pairingNames, setPairingNames ] = useState<string[]>([]);  
	const [ isDropDownOpen, setIsDropDownOpen ] = useState<boolean>(false);
  const [ isSearchBoxOpen, setIsSearchBoxOpen ] = useState<boolean>(false);

  useEffect(() => {
    fetchData().then((response) => {
      const { data } = response;
      setCoins(data);
      setDisplayedCoins(data);
      setFiatNames(getFiatNames(data));
      setPairingNames(getPairingNames(data));
    }).catch((e) => {
      console.log(e);
      setCoins({})
    });
  }, []);

  const filterByFiat = (fiat : string): void => {
    setDisplayedCoins(filterFiats(coins, fiat));
    setDisplayFiatName(fiat);
    setIsDropDownOpen(false);
  }

  return (
    <div>
      <Router>
{					<Routes>
          <Route path="/" element={<Dashboard 
            displayedCoins={displayedCoins}
            displayFiatName={displayFiatName}
            fiatNames={fiatNames}
            filterByFiat={filterByFiat}
            isDropDownOpen={isDropDownOpen}
            setIsDropDownOpen={setIsDropDownOpen}
            pairingNames={pairingNames}
            setIsSearchBoxOpen={setIsSearchBoxOpen}
            isSearchBoxOpen={isSearchBoxOpen}
          />} />
          <Route path="/:id" element={<Pairing />} /> 
        </Routes>}
      </Router>
    </div>
  );
}

export default App;

