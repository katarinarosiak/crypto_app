import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import CoinsInterface from '../../interfaces/coinsInterface';
import { Column } from '../../interfaces/interfaces';
import { createColumns } from '../../utils/helpers';


interface Props {
  displayedCoins: CoinsInterface | {};
  displayFiatName: string; 
}

const Table: React.FC<Props> = ({ displayedCoins, displayFiatName }) => {
  
  const data: Column[] = React.useMemo(
    () => Object.keys(displayedCoins).length ? createColumns(displayedCoins) : []
    ,[displayedCoins]);

  const columns: unknown = React.useMemo(
    () => [
      {
        Header: 'Symbol',
        accessor: 'col1',
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

  const tableInstance = useTable({ columns, data } as any, useSortBy,
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
                {row.cells.map((cell, idx) => {
                  if (cell.value >= 0) {
                    return (
                      <td key={`${cell.value}-${idx}`} data-tested={`${cell.value}-${idx}`} {...cell.getCellProps()} className="text-sm text-gray-900 font-light py-4 whitespace-nowrap">
                        {cell.render('Cell')}
                      </td>
                    )
                  } else if (cell.value < 0){
                    return (
                      <td key={`${cell.value}-${idx}`} data-tested={`${cell.value}-${idx}`} {...cell.getCellProps()} className="text-sm text-style_red font-light py-4 whitespace-nowrap">
                        {cell.render('Cell')}
                      </td>
                    )
                  } else {
                    return (
                      <td key={`${cell.value}-${idx}`} data-tested={`${cell.value}-${idx}`} {...cell.getCellProps()} className="text-sm text-black font-medium py-4 whitespace-nowrap">
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