import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";
import Moda from "./Moda";

// Component for inputting and running queries
function QueryInput({
  setValue,
  value,
  origData,
  filteredData,
  setFilteredData,
  initData,
  setInitData,
}) {
  // Function to reset the table data to the original data
  const onResetTable = () => {
    setFilteredData(origData);
    setInitData(origData);
  };

  // Function to clear the query input
  const onClear = () => {
    setValue("");
  };

  // State to manage the modal visibility
  const [show, setShow] = useState(false);

  // Function to run the query
  const onRun = () => {
    if (value === "SELECT * FROM TABLE") {
      // Show all rows when the query is for selecting all columns
      setFilteredData(initData);
    } else if (value === "SELECT * FROM TABLE WHERE S.NO. = 6") {
      // Filter rows based on a specific condition (example condition)
      const newFilteredData = filteredData.filter(
        (_, i) => i === 0 || parseInt(filteredData[i][0]) === 6
      );
      setFilteredData(newFilteredData);
    } else if (value === "DELETE * FROM TABLE WHERE S.NO. = 3") {
      // Delete rows based on a specific condition (example condition)
      const newFilteredData = initData.filter(
        (_, i) => 3 !== parseInt(initData[i][0])
      );
      setFilteredData(newFilteredData);
      setInitData(newFilteredData);
    } else {
      // Show a modal for handling unsupported queries
      setShow(true);
    }
  };

  return (
    <div className="ace">
      {/* Modal component for handling unsupported queries */}
      {show && <Moda show={show} value setShow={setShow} />}
      {/* AceEditor component for inputting SQL queries */}
      <AceEditor
        id="editor"
        aria-label="editor"
        mode="mysql"
        theme="sqlserver"
        name="editor"
        width="100%"
        fontSize={18}
        minLines={15}
        maxLines={10}
        showPrintMargin={false}
        showGutter
        placeholder="Write your query here..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
        }}
        value={value}
        onChange={(value) => setValue(value)}
        showLineNumbers
      />
      {/* Button container for running, clearing, and resetting */}
      <div className="button-container">
        <button className="run-button" onClick={onRun}>
          Run
        </button>
        <button className="clear-button" onClick={onClear}>
          Clear
        </button>
        <button className="reset-button" onClick={onResetTable}>
          Reset Table
        </button>
      </div>
    </div>
  );
}

export default QueryInput;
