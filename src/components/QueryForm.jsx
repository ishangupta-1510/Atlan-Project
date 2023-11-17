import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const QueryForm = ({ onQuerySubmit, onSelectQuery }) => {
  const handleQueryItemClick = (clickedQuery) => {
    onSelectQuery(clickedQuery);
    onQuerySubmit(clickedQuery, "select"); // Assuming "select" as the default query type
  };

  return (
    <div>
      <h2>OR</h2>
      <h5>Available Queries</h5>
      <ListGroup as="ul">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() => handleQueryItemClick("SELECT * FROM TABLE")}
          style={{ cursor: "pointer", transition: "background-color 0.3s" }}
        >
          <div className="ms-1 me-auto">SELECT * FROM TABLE</div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() =>
            handleQueryItemClick("SELECT * FROM TABLE WHERE S.NO. = 6")
          }
          style={{ cursor: "pointer", transition: "background-color 0.3s" }}
        >
          <div className="ms-1 me-auto">
            SELECT * FROM TABLE WHERE S.NO. = 6
          </div>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          onClick={() =>
            handleQueryItemClick("DELETE * FROM TABLE WHERE S.NO. = 3")
          }
          style={{ cursor: "pointer", transition: "background-color 0.3s" }}
        >
          <div className="ms-1 me-auto">
            DELETE * FROM TABLE WHERE S.NO. = 3
          </div>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default QueryForm;
