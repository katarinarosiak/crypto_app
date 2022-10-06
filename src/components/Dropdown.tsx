// @ts-nocheck
import { useState, useContext, useEffect, useCallback, useRef } from 'react';
import { CoinContext } from '../App';
import { FiatContext } from '../App';

const Dropdown: React.FC = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false);
  const [ show, setShow ] = useState<string>('Show All')
  const [ fiatCurrencies, setFiatCurrencies ] = useState<string[]>([]);

  const coinsData = useContext(CoinContext);
  const { setDisplayFiat } = useContext(FiatContext);

  useEffect(() => {
    if ('coins' in coinsData) {
      const currencies = Object.keys(coinsData.coins).map(coin => coin.slice(3));
      currencies.unshift('Show All');
      setFiatCurrencies(currencies);
    }
  }, [coinsData])

  const dropdownWindowRef = useRef<HTMLDivElement>(null);

  const chooseFiat = useCallback((fiat: string)=> {
    setShow(fiat)
    setDisplayFiat(fiat)
    setIsOpen(false);
  },[setDisplayFiat])
  
  const listWindow = useRef<HTMLUListElement>(null);

  return (
    <div ref={dropdownWindowRef} className={"relative"}>
      <button 
        data-tested="dropdown-btn"
        className="rounded opacity-70 bg-gradient-to-r from-style_green to-style_blue p-3 text-white w-72 h-11 mt-6 drop-shadow-lg"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
        >Filter By Fiat Currency: {show}▼</button>
      <div className={isOpen ? "absolute border overflow-auto h-60" : "absolute overflow-auto h-60"}>
        <ul
          ref={listWindow}  
          className="overflow-auto"
        >
        {isOpen && (
          <>
            {fiatCurrencies.map((fiat, idx) => {
              return (
                <li
                  className="block bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
                  data-tested={`drop${fiat}${idx}`}
                  key={`drop${fiat}${idx}`}
                  onClick={() => {
                    chooseFiat(fiat);
                  }}
                >
                  {fiat}
                </li>
              )
            })}
          </>
        )}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;