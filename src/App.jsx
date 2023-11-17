import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import CsvTable from "./components/CsvTable";
import QueryForm from "./components/QueryForm";
import QuerySelector from "./components/QuerySelector";
import TableSelector from "./components/TableSelector";
import QueryInput from "./components/QueryInput";
import Navbr from "./components/Navbar";

const App = () => {
  const [origData, setOrigData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [initData, setInitData] = useState([]);
  const [table, setTable] = useState("/employees.csv");
  const [query, setQuery] = useState("");
  const handleSelectQuery = (selectedQuery) => {
    setQuery(selectedQuery);
  };
  useEffect(() => {
    loadCsvData();
  }, [table]);

  const loadCsvData = () => {
    Papa.parse(table, {
      download: true,
      complete: (result) => {
        const data = result.data;
        setFilteredData(data);
        setInitData(data);
        setOrigData(data);
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
            <TableSelector
              setTable={setTable}
              origData={origData}
              setFilteredData={setFilteredData}
              setInitData={setInitData}
            />
            <QuerySelector
              filteredData={filteredData}
              setFilteredData={setFilteredData}
              initData={initData}
              setInitData={setInitData}
            />
            <QueryForm
              onQuerySubmit={handleQuerySubmit}
              onSelectQuery={handleSelectQuery}
            />
          </div>

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
          <CsvTable filteredData={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default App;
