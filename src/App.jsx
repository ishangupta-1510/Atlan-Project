import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Navbr from "./components/Navbar";
import CsvTable from "./components/CsvTable";
import QueryForm from "./components/QueryForm";
import QuerySelector from "./components/QuerySelector";
import TableSelector from "./components/TableSelector";
import QueryInput from "./components/QueryInput";

const App = () => {
  // State to store the original, filtered, and initial data
  const [origData, setOrigData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [initData, setInitData] = useState([]);

  // State to track the selected table and query
  const [table, setTable] = useState("/employees.csv");
  const [query, setQuery] = useState("");

  // Function to handle the selection of a query
  const handleSelectQuery = (selectedQuery) => {
    setQuery(selectedQuery);
  };

  // Effect to load CSV data when the selected table changes
  useEffect(() => {
    loadCsvData();
  }, [table]);

  // Function to load CSV data using Papaparse
  const loadCsvData = () => {
    Papa.parse(table, {
      download: true,
      complete: (result) => {
        const data = result.data;
        // Set the filtered, initial, and original data
        setFilteredData(data);
        setInitData(data);
        setOrigData(data);
      },
    });
  };

  return (
    <div>
      <Navbr />
      <div className="main">
        <div className="gri">
          <div className="left">
            {/* Component to select the table */}
            <TableSelector
              setTable={setTable}
              origData={origData}
              setFilteredData={setFilteredData}
              setInitData={setInitData}
            />
            {/* Component to select and run queries */}
            <QuerySelector
              filteredData={filteredData}
              setFilteredData={setFilteredData}
              initData={initData}
              setInitData={setInitData}
            />
            {/* Component to input and submit queries */}
            <QueryForm onSelectQuery={handleSelectQuery} />
          </div>

          {/* Component to input and submit specific queries */}
          <QueryInput
            setValue={setQuery}
            value={query}
            origData={origData}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            initData={initData}
            setInitData={setInitData}
          />
        </div>
        <div className="right">
          {/* Component to display the CSV table */}
          <CsvTable filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default App;
