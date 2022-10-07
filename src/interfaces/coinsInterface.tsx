
interface Price {
  day: number;
  hour: number;
  month: number;
  month_3: number;
  month_6: number;
  week: number;
  year: number;
}

interface Changes {
  percent: Price;
  price: Price;
  display_symbol: string;
  display_timestamp: string;
  high: number;
  last: number;
  low: number;
  open: Price;
  timestamp: number;
  volume: number;
}

interface Averages {
  day: number;
  week: number;
  month: number;
}

interface CoinItem {
  ask: number;
  averages: Averages;
  bid: number;
  changes: Changes;
  display_timestamp: string;
  high: number;
  last: number;
  low: number;
  open: Price;
  timestamp: number;
  volume: number; 
	display_symbol: string;
}

export default interface CoinsInterface {
  [index: string]: CoinItem;
}

// export default interface CoinsInterface {
//   coins: CoinItem;
// }


export type {
  CoinItem,
}


