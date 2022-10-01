import React, { isValidElement } from 'react'
import { useTable, usePagination, useSortBy } from 'react-table';
import { useContext } from 'react';
import { CoinContext } from '../App';
import { FiatContext } from '../App';

const Table = () => {
	const { coins } = useContext(CoinContext);
	const { displayFiat, setDisplayFiat } = useContext(FiatContext);

	const parseData = (data) => {
		let parsed = []; 
		for (let key in data) {
			parsed.push({
				col1: data[key].display_symbol.replace("-", "/"),
				col2: data[key].ask,
				col3: data[key].open.hour,
				col4: data[key].open.day,
				col5: data[key].open.week,
				col6: data[key].open.month,
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

	const columns = React.useMemo(
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
    usePagination);

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
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())} className="text-md font-medium text-white py-5 whitespace-nowrap">
									{column.render('Header')}
									{column.isSorted ? (column.isSortedDesc ? "▲" : "▼" ) : ""}
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row, idx) => {
						prepareRow(row)
						return (
							<tr {...row.getRowProps()} className={idx%2===0 ? "bg-gray-200 border-b" : "border-b"}>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()} className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
											{cell.render('Cell')}
										</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
			<div className="text-center m-4 text-xs">
					<span>
						Page{' '}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{' '}
					</span>
				<button onClick={() => previousPage()} disabled={!canPreviousPage} className="text-xs rounded bg-gradient-to-r from-style_green to-style_blue p-2 text-white w-20 mx-4">Previous</button>
				<button onClick={()=> nextPage()} disabled={!canNextPage} className="text-xs rounded bg-gradient-to-r from-style_green to-style_blue p-2 text-white w-20 mx-4">Next</button>
			</div>
		</>
	);
}

export default Table;