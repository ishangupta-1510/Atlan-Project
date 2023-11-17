import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";
import Moda from "./Moda";

function QueryInput({
  setValue,
  value,
  origData,
  filteredData,
  setFilteredData,
  initData,
  setInitData,
}) {
  const onResetTable = () => {
    setFilteredData(origData);
    setInitData(origData);
  };
  const onClear = () => {
    setValue("");
  };
  const [show, setShow] = useState(false);
  const onRun = () => {
    if (value === "SELECT * FROM table") {
      setFilteredData(initData);
    } else if (value === "SELECT * FROM TABLE WHERE S.NO. = 6") {
      // console.log(filteredData[1][0]);
      const newFilteredData = filteredData.filter(
        (_, i) => i === 0 || parseInt(filteredData[i][0]) === 6
      );
      setFilteredData(newFilteredData);
    } else if (value === "DELETE * FROM TABLE WHERE S.NO. = 3") {
      const newFilteredData = initData.filter(
        (_, i) => 3 !== parseInt(initData[i][0])
      );
      setFilteredData(newFilteredData);
      setInitData(newFilteredData);
    } else {
      setShow(true);
    }
  };
  return (
    <div className="ace">
      {show && <Moda show={show} setShow={setShow} />}
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
