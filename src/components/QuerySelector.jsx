import React, { useState } from "react";
import { Dropdown, Form } from "react-bootstrap";

const SELECT_QUERY = "SELECT";
const DELETE_QUERY = "DELETE";

function QuerySelector({ setFilteredData, initData, setInitData }) {
  const [showInput, setShowInput] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState(SELECT_QUERY);
  const [input, setInput] = useState(1);

  const handleQueryChange = (query) => {
    setShowInput(true);
    setSelectedQuery(query);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Query:", selectedQuery);
    console.log("Input Value:", input);

    if (selectedQuery === SELECT_QUERY) {
      const columnIndex = parseInt(input);
      const newFilteredData = initData.filter(
        (_, i) => i === 0 || columnIndex === parseInt(initData[i][0])
      );
      setFilteredData(newFilteredData);
    } else if (selectedQuery === DELETE_QUERY) {
      const columnIndex = parseInt(input) - 1;
      const newFilteredData = initData.filter(
        (_, i) => columnIndex + 1 !== parseInt(initData[i][0])
      );
      setFilteredData(newFilteredData);
      setInitData(newFilteredData);
    }
  };

  return (
    <div>
      <Dropdown style={{ width: "100%" }}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="full-width"
        >
          Select Query:
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: "100%" }}>
          <Dropdown.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={() => handleQueryChange(SELECT_QUERY)}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">SELECT FROM table</div>
            </div>
          </Dropdown.Item>

          <Dropdown.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={() => handleQueryChange(DELETE_QUERY)}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">DELETE FROM table</div>
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {showInput && (
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="inputValue" className="mt-3">
            <Form.Label>Enter the column number to {selectedQuery}:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter value..."
              value={input}
              onChange={handleInputChange}
            />
          </Form.Group>
          <button
            style={{ marginTop: "10px" }}
            type="submit"
            className="styled-button"
          >
            Run Query
          </button>
        </Form>
      )}
    </div>
  );
}

export default QuerySelector;
