import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const QueryForm = ({ onQuerySubmit }) => {
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
      <h5>Available Queries</h5>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() => handleQueryItemClick("SELECT * FROM table")}
          style={{ cursor: "pointer", transition: "background-color 0.3s" }}
        >
          <div className="ms-1 me-auto">SELECT * FROM table</div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() =>
            handleQueryItemClick(
              "SELECT * FROM TABLE WHERE S.NO. = (WRITE NUMBER)"
            )
          }
          style={{ cursor: "pointer", transition: "background-color 0.3s" }}
        >
          <div className="ms-1 me-auto">
            SELECT * FROM TABLE WHERE S.NO. = (WRITE NUMBER)
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() =>
            handleQueryItemClick(
              "DELETE * FROM TABLE WHERE S.NO. = (WRITE NUMBER)"
            )
          }
          style={{ cursor: "pointer", transition: "background-color 0.3s" }}
        >
          <div className="ms-1 me-auto">
            DELETE * FROM TABLE WHERE S.NO. = (WRITE NUMBER)
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default QueryForm;
