import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const QueryInput = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("select");

  const handleQueryChange = (e) => setQuery(e.target.value);
  const handleQueryTypeChange = (e) => setQueryType(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onQuerySubmit(query, queryType);
    setQuery("");
  };

  const handleQueryItemClick = (clickedQuery) => {
    setQuery(clickedQuery);
  };

  return (
    <div>
      <h2>OR</h2>
      <form onSubmit={handleFormSubmit}>
        <label className="code-editor-label">
          Write SQL Query:
          <input
            type="text"
            value={query}
            onChange={handleQueryChange}
            className="code-editor-input"
          />
        </label>
        <button type="submit" className="styled-button">
          Run Query
        </button>
      </form>
    </div>
  );
};

export default QueryInput;
