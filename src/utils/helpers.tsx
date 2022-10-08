import CoinsInterface from '../interfaces/coinsInterface';
import { CoinItem } from '../interfaces/coinsInterface';
import { Changes, Averages, Column } from '../interfaces/interfaces';


const createColumns = (coins: CoinsInterface): Column[] | [] => {
  let parsed: any[] = []; 
  if (Object.keys(coins).length === 0) return parsed; 
  for (let key in coins) {
    parsed.push({
      col1: coins[key].display_symbol.replace("-", "/"),
      col2: coins[key].ask,
      col3: coins[key].changes.price.hour,
      col4: coins[key].changes.price.day,
      col5: coins[key].changes.price.week,
      col6: coins[key].changes.price.month,
    });
  }
  return parsed;
};

const getFiatNames = (coins: CoinsInterface | {}): string[] | [] => {
    const currencies = Object.keys(coins).map(coin => coin.slice(3));
    currencies.unshift('Show All');
    return currencies;
};

const filterFiats = (coins: CoinsInterface | {}, fiatName: string) : CoinsInterface | {} => {
  if (fiatName === 'Show All') return coins;
  const filteredCoins = Object.entries(coins).filter(coin => coin[0].slice(3) === fiatName);
  return Object.fromEntries(filteredCoins);
};

const filterMatchingPairingNames = (input: string, pairingNames: string[] ) => {
  return pairingNames.filter(name => name.slice(0, input.length).toLowerCase() === input.toLowerCase())
};

const getPairingNames = (coins: CoinsInterface | {}): string[] => {
  return Object.keys(coins).map(name => `${name.slice(0,3)}/${name.slice(3)}`);
};

const findCurrentCoin = (coins: CoinsInterface | {}, pairingName: string | undefined): CoinItem | {} => {
  const arr = Object.entries(coins).find(coin => coin[0] === pairingName) || [];
  return Object.fromEntries([arr]);
};

const parseAverages = (data: CoinItem): Averages[] | [] => {
  const coinData: CoinItem = Object.values(data)[0];
  if (!coinData || Object.values(data).length === 0) return [];

    if ('averages' in coinData) {
      return [
        {
          title:"Average: day",
          val: coinData['averages']['day']
        },
        {
          title: "Average: week",
          val: coinData['averages']['week']
        },
        {
          title: "Average: month",
          val: coinData['averages']['month']
        },
      ];
    } else {
      return [];
    }
};

const parseChanges = (data:CoinItem | {}): Changes[] | [] => {

  const coinData: CoinItem | {} = Object.values(data)[0];
  if (!coinData || Object.values(data).length === 0) return [];
  if ('changes' in coinData) {
  return [
      {
        title: "Change: day",
        val: [coinData['changes']['percent']['day'], coinData['changes']['price']['day']]
      },
      {
        title: "Change: week",
        val: [coinData['changes']['percent']['week'], coinData['changes']['price']['week']]
      },
      {
        title: "Change: month",
        val: [coinData['changes']['percent']['month'], coinData['changes']['price']['month']]
      },
    ];
  } else {
    return [];
  }
}


export {
  createColumns,
  getFiatNames,
  filterFiats,
  filterMatchingPairingNames,
  getPairingNames,
  findCurrentCoin,
  parseAverages,
  parseChanges,
}