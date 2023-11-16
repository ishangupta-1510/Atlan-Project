import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

function QueryInput({ setValue, value, onRun, onClear, onResetTable }) {
  return (
    <div className="ace">
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
