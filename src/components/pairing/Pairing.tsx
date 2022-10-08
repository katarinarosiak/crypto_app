import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Navbar from '../shared/Navbar';
import CardAverages from './CardAverages';
import CardChanges from './CardChanges';
import { Averages, Changes } from '../../interfaces/interfaces';
import { CoinItem } from '../../interfaces/coinsInterface';
import { findCurrentCoin, parseAverages, parseChanges } from '../../utils/helpers'; 
import { fetchData } from '../../utils/api';


const Pairing: React.FC = () => {
  const { id } = useParams();
  
  const [ averages, setAverages ] = useState<Averages[] | []>([]);
  const [ changes, setChanges ] = useState<Changes[] | []>([]);
  const [ title, setTitle ] = useState<string>("");
  const [ lastUpdated, setLastUpdated ] = useState<string>("");


  useEffect(() => {
    fetchData().then((response) => {
      const { data } = response;
      const currentCoin: CoinItem | {} = findCurrentCoin(data, id);

      if (Object.keys(currentCoin).length) {
        setAverages(parseAverages(currentCoin as CoinItem));
        setChanges(parseChanges(currentCoin));
        const coinData = Object.values(currentCoin)[0];
        if ('display_symbol' in coinData && 'display_timestamp' in coinData) {
          setTitle(coinData['display_symbol'] as any);
          setLastUpdated(coinData['display_timestamp'] as any);
      }}
    }).catch((err) => {
      console.log(err);
      setAverages([]);
      setChanges([]);
      setTitle("");
      setLastUpdated("");
    })
  }, [id]);

  
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <h1 className="text-4xl text-center font-semibold m-10">Pairing: <span className="text-style_green">{title}</span></h1>
      </div>
      <div className="text-center">
        <h2 className="text-gray-600">Last updated: {lastUpdated}</h2>
      </div>
      <div className="grid grid-cols-2 gap-12 md:grid-cols-3 m-20">
        {averages.map((average, idx) => {
          return (
            <div key={`avergae-${idx}`}>
              <CardAverages average={average} idx={idx}/>
            </div>
          )
        })}
        {changes.map((change, idx) => {
          return (
            <div key={`change-${idx}`}>
              <CardChanges change={change} idx={idx} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Pairing