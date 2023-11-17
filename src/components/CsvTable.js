import React from "react";
import { useTable } from "react-table";

const CsvTable = ({ filteredData, onReset }) => {
  const columns = React.useMemo(() => {
    if (filteredData.length === 0) {
      return [];
    }

    // Assuming the first row contains column headers
    const header = filteredData[0];

    return header.map((col, index) => ({
      Header: col,
      accessor: `${index}`, // accessor is the "key" in the data
    }));
  }, [filteredData]);

  const data = React.useMemo(() => {
    if (filteredData.length === 0) {
      return [];
    }

    return filteredData.slice(1).map((row) =>
      row.reduce((obj, cell, index) => {
        obj[`${index}`] = cell;
        return obj;
      }, {})
    );
  }, [filteredData]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  if (filteredData.length === 0) {
    return (
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>No data available</p>
        <button onClick={onReset} className="reset-button">
          Reset
        </button>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="csv-table" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ minWidth: "70px" }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CsvTable;
