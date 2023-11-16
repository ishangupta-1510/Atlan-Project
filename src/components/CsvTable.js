import React from "react";

const CsvTable = ({ filteredData, onReset }) => {
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

  const header = filteredData[0]; // Assuming the first row contains column headers

  return (
    <div className="table-container">
      <table className="csv-table">
        <thead>
          <tr>
            {header.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td style={{ minWidth: "70px" }} key={cellIndex}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CsvTable;
