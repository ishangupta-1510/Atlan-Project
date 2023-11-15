// QueryForm.js
import React, { useState } from "react";

const QueryForm = ({ onQuerySubmit }) => {
  const [query, setQuery] = useState("");
  const [queryType, setQueryType] = useState("select");

  const handleQueryChange = (e) => setQuery(e.target.value);
  const handleQueryTypeChange = (e) => setQueryType(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onQuerySubmit(query, queryType);
    setQuery(""); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        SQL Query Type:
        <select value={queryType} onChange={handleQueryTypeChange}>
          <option value="select">SELECT</option>
          <option value="delete">DELETE</option>
          <option value="update">UPDATE</option>
        </select>
      </label>
      <label>
        SQL Query:
        <input
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder="Enter your SQL query..."
        />
      </label>
      <button type="submit">Run Query</button>
    </form>
  );
};

export default QueryForm;
