import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import CsvTable from "./components/CsvTable";
import QueryForm from "./components/QueryForm";

const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [table, setTable] = useState("/employees.csv");

  useEffect(() => {
    loadCsvData();
  }, [table]);

  const loadCsvData = () => {
    Papa.parse(table, {
      download: true,
      complete: (result) => {
        const data = result.data.slice(1); // Skip header row
        setCsvData(data);
        setFilteredData(data);
        setOriginalData(data);
      },
    });
  };

  const handleQuerySubmit = (selectedTable, query, queryType) => {
    setTable(selectedTable);
    switch (queryType) {
      case "select":
        runSelectQuery(query);
        break;
      case "delete":
        runDeleteQuery(query);
        break;
      case "update":
        runUpdateQuery(query.column, query.oldValue, query.newValue);
        break;
      default:
        break;
    }
  };

  const runSelectQuery = (column) => {
    const selectedColumnIndex = parseInt(column);

    if (selectedColumnIndex !== -1) {
      const newCsvData = csvData.filter(
        (_, index) => index + 1 === selectedColumnIndex
      );
      setFilteredData(newCsvData);
    }
  };

  const runDeleteQuery = (condition) => {
    const filtered = csvData.filter((row) =>
      row.some((cell) => cell.toLowerCase().includes(condition.toLowerCase()))
    );
    setFilteredData(filtered);
  };

  const runUpdateQuery = (column, oldValue, newValue) => {
    const columnIndex = csvData[0].indexOf(column);
    const updatedData = csvData.map((row) => {
      if (row[columnIndex].toLowerCase() === oldValue.toLowerCase()) {
        return [
          ...row.slice(0, columnIndex),
          newValue,
          ...row.slice(columnIndex + 1),
        ];
      }
      return row;
    });
    setCsvData(updatedData);
    setFilteredData(updatedData);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      <h1>CSV Query App</h1>
      <div>
        <label>Select Table: </label>
        <select onChange={(e) => setTable(e.target.value)} value={table}>
          <option value="/employees.csv">Employees</option>
          <option value="/customers.csv">Customers</option>
        </select>
      </div>
      <QueryForm onQuerySubmit={handleQuerySubmit} />
      <CsvTable filteredData={filteredData} />
    </div>
  );
};

export default App;
