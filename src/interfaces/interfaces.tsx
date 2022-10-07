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

interface Column {
	col1: string;
	col2: number;
	col3: number;
	col4: number;
	col5: number;
	col6: number;
};


export type {
  Averages,
  Changes,
  ChangesInterface,
  AveragesInterface,
	Column,
}