import React from "react";
import { Dropdown } from "react-bootstrap";

// Define constants for table values
const EMPLOYEES_TABLE = "/employees.csv";
const CUSTOMERS_TABLE = "/customers.csv";

// Helper function to render individual dropdown items
function renderDropdownItem(label, value, handleTableChange) {
  return (
    <Dropdown.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      onClick={() => handleTableChange(value)}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{label}</div>
        {`Data for ${label}`}
      </div>
    </Dropdown.Item>
  );
}

// Component for selecting the table
function TableSelector({ setTable, origData, setFilteredData, setInitData }) {
  // Function to handle a change in the selected table
  const handleTableChange = (selectedTable) => {
    // Reset filtered and initial data to the original data
    setFilteredData(origData);
    setInitData(origData);
    // Set the selected table
    setTable(selectedTable);
  };

  return (
    <div>
      {/* Dropdown component for table selection */}
      <Dropdown style={{ width: "100%" }}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="full-width"
        >
          Select Table:
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: "100%" }}>
          {/* Render dropdown items for Employees and Customers */}
          {renderDropdownItem("Employees", EMPLOYEES_TABLE, handleTableChange)}
          {renderDropdownItem("Customers", CUSTOMERS_TABLE, handleTableChange)}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default TableSelector;
