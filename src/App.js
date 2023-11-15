// App.js
import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import CsvTable from "./components/CsvTable";
import QueryForm from "./components/QueryForm";

const App = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    Papa.parse("/employees.csv", {
      download: true,
      complete: (result) => {
        const data = result.data.slice(1); // Skip header row
        setCsvData(data);
        setFilteredData(data);
        setOriginalData(data);
      },
    });
  }, []);

  const handleQuerySubmit = (query, queryType) => {
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
    const selectedColumnIndex = csvData[0].indexOf(column);
    if (selectedColumnIndex !== -1) {
      const selectedData = csvData.map((row) => [row[selectedColumnIndex]]);
      setFilteredData(selectedData);
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
      <QueryForm onQuerySubmit={handleQuerySubmit} />
      <CsvTable filteredData={filteredData} />
    </div>
  );
};

export default App;
