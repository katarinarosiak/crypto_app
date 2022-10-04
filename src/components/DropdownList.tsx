// @ts-nocheck
import { useState, useContext, useEffect, useMemo } from 'react'
import { Listbox } from '@headlessui/react'
import { CoinContext } from '../App';
import { FiatContext } from '../App';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const DropdownList: React.FC = () => {
  const [selectedFiat, setSelectedFiat] = useState<string>("Show All")
	const [ show, setShow ] = useState<string>('Show All')
	const [ fiatCurrencies, setFiatCurrencies ] = useState<string[]>([]);

	const { coins } = useContext(CoinContext);
	const { displayFiat, setDisplayFiat } = useContext(FiatContext);

	const getFiatNames = useMemo(() => {
		const fiatNames = Object.keys(coins).map(coin => coin.slice(3));
		fiatNames.unshift("Show All");
		return fiatNames;
	}, [coins]);

	useEffect(() => {
		// currencies.unshift('Show All');
		setFiatCurrencies(getFiatNames);
	}, [getFiatNames])


	const testFunc = (e: any) => {
		console.log(e)
		setDisplayFiat(e);
		setSelectedFiat(e);
	}


  return (
    <Listbox value={selectedFiat} onChange={(e) => testFunc(e)}>
      <Listbox.Button className="rounded opacity-70 bg-gradient-to-r from-style_green to-style_blue p-3 text-white w-72 h-11 mt-6 drop-shadow-lg"
			>{selectedFiat}</Listbox.Button>
      <Listbox.Options className="absolute border overflow-auto h-60">
        {fiatCurrencies.map((fiat) => (
          <Listbox.Option
            // key={fiat.id}
            value={fiat}
						className="block bg-white py-3 px-5 w-72 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-gray-900"
          >
            {fiat}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  )
}

export default DropdownList;