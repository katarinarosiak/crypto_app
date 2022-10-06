interface Averages {
  title: string;
  val: number;
}

interface Changes {
  title: string;
  val: number[];
}

interface ChangesInterface {
  change: Changes;
}

interface AveragesInterface {
  average: Averages;
}

interface FiatContextInterface {
  displayFiat: string;
  setDisplayFiat: () => void;
}


export type {
   Averages,
  Changes,
  ChangesInterface,
  AveragesInterface,
  FiatContextInterface,
}