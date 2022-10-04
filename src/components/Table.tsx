// @ts-nocheck
import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { useContext, useState } from 'react';
import { CoinContext, FiatContext } from '../App';
import CoinContextInterface from '../interfaces/coinContextInterface'
import { useEffect } from 'react';

const Table: React.FC = () => {
	const coinsData = useContext(CoinContext);
	const fiatData = useContext(FiatContext);

	const [coins, setCoins ] = useState<CoinContextInterface>({});
	const [ displayFiat, setDisplayFiat ] = useState<string>("");

	useEffect(() => {
		if (coinsData && fiatData ) {
			setCoins(coinsData.coins);
			setDisplayFiat(fiatData.displayFiat);
		}
	}, [coinsData, fiatData])


	const parseData = (data) => {
		let parsed = []; 
		for (let key in data) {
			parsed.push({
				col1: data[key].display_symbol.replace("-", "/"),
				col2: data[key].ask,
				col3: data[key].changes.price.hour,
				col4: data[key].changes.price.day,
				col5: data[key].changes.price.week,
				col6: data[key].changes.price.month,
			});
		}
		return parsed;
	}

	const filterFiatCurrencies = (displayFiat, coins) => {
		return Object.entries(coins).reduce((obj, curr) => {
			if (curr[0].slice(3) === displayFiat.replace("/", "")) {
				obj[curr[0]] = curr[1]; 
			}
			return obj;
		}, {})
	};

	const data = React.useMemo(
		() => {
			if (displayFiat !== "Show All") {
				return parseData(filterFiatCurrencies(displayFiat, coins))
			}
			return parseData(coins)
	},[coins, displayFiat]);

	interface Columns {
		[index: number]: 
			{ 
				Header: string;
				accessor: string;
			};
	}

	const columns: Columns = React.useMemo(
		() => [
			{
				Header: 'Symbol',
				accessor: 'col1', // accessor is the "key" in the data
			},
			{
				Header: 'Ask Price',
				accessor: 'col2',
			},
			{
				Header: 'Hourly Change',
				accessor: 'col3',
			},
			{
				Header: 'Daily Change',
				accessor: 'col4',
			},
			{
				Header: 'Weekly Change',
				accessor: 'col5',
			},
			{
				Header: 'Monthly Change',
				accessor: 'col6',
			},
		],
		[]
	)

	const tableInstance = useTable({ columns, data }, useSortBy,
    usePagination) as any;

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		prepareRow,
		canNextPage,
		canPreviousPage,
		pageOptions,
		state,
	} = tableInstance;

	const { pageIndex } = state;

	return (
		<>
			<table {...getTableProps()} className="w-full">
				<thead className="bg-dark text-white">
					{headerGroups.map((headerGroup: { getHeaderGroupProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; headers: any[]; }) => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-md font-medium text-white py-5 w-5 whitespace-nowrap">
									{column.render('Header')}
									{column.isSorted ? (column.isSortedDesc ? "▲" : "▼" ) : ""}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row: { getRowProps: () => JSX.IntrinsicAttributes & React.ClassAttributes<HTMLTableRowElement> & React.HTMLAttributes<HTMLTableRowElement>; cells: any[]; }, idx:number) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()} className={idx%2===0 ? "bg-gray-200 border-b" : "border-b"}>
								{row.cells.map(cell => {
									if (cell.value >= 0) {
										return (
											<td {...cell.getCellProps()} className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
												{cell.render('Cell')}
											</td>
										)
									} else if (cell.value < 0){
										return (
											<td {...cell.getCellProps()} className="text-sm text-style_red font-light py-4 whitespace-nowrap">
												{cell.render('Cell')}
											</td>
										)
									} else {
										return (
											<td {...cell.getCellProps()} className="text-sm text-black font-medium py-4 whitespace-nowrap">
												{cell.render('Cell')}
											</td>
										)
									}
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className="text-center m-4 text-xs">
				<button onClick={() => previousPage()}
					 	disabled={!canPreviousPage}
						className={canPreviousPage ? "text-xs opacity-70 rounded bg-gradient-to-r from-style_green to-style_blue p-2 text-white w-20 mx-4" : "text-xs rounded bg-gradient-to-r from-gray-200 to-gray-300 p-2 text-white w-20 mx-4"}>Previous</button>
				<span>
						Page{' '}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{' '}
					</span>
				<button onClick={()=> nextPage()}
				 	disabled={!canNextPage}
				  className={canNextPage ? "text-xs opacity-70 rounded bg-gradient-to-r from-style_green to-style_blue p-2 text-white w-20 mx-4" : "text-xs rounded bg-gradient-to-r from-gray-200 to-gray-300 p-2 text-white w-20 mx-4"}>Next</button>
			</div>
		</>
	);
}

export default Table;