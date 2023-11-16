import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import CsvTable from "./components/CsvTable";
import QueryForm from "./components/QueryForm";
import QuerySelector from "./components/QuerySelector";
import TableSelector from "./components/TableSelector";
import QueryInput from "./components/QueryInput";
import Navbr from "./components/Navbar";

const App = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [table, setTable] = useState("/employees.csv");

  useEffect(() => {
    loadCsvData();
  }, [table]);

  const loadCsvData = () => {
    Papa.parse(table, {
      download: true,
      complete: (result) => {
        const data = result.data;
        setFilteredData(data);
      },
    });
  };

  const handleQuerySubmit = (selectedTable, query, queryType) => {};

  return (
    <div>
      <Navbr />
      <div className="main">
        <div className="gri">
          <div className="left">
            <TableSelector setTable={setTable} />
            <QuerySelector
              filteredData={filteredData}
              setFilteredData={setFilteredData}
            />
            <QueryForm onQuerySubmit={handleQuerySubmit} />
          </div>
          <QueryInput />
        </div>
        <div className="right">
          <CsvTable filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default App;
