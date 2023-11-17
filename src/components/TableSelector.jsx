import React from "react";
import { Dropdown } from "react-bootstrap";

const EMPLOYEES_TABLE = "/employees.csv";
const CUSTOMERS_TABLE = "/customers.csv";

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

function TableSelector({ setTable, origData, setFilteredData, setInitData }) {
  const handleTableChange = (selectedTable) => {
    setFilteredData(origData);
    setInitData(origData);
    setTable(selectedTable);
  };

  return (
    <div>
      <Dropdown style={{ width: "100%" }}>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="full-width"
        >
          Select Table:
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ width: "100%" }}>
          {renderDropdownItem("Employees", EMPLOYEES_TABLE, handleTableChange)}
          {renderDropdownItem("Customers", CUSTOMERS_TABLE, handleTableChange)}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default TableSelector;
