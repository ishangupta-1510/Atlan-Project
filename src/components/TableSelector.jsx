import React from "react";
import { Dropdown } from "react-bootstrap";

function TableSelector({
  setTable,
  origData,
  setFilteredData,
  setInitData,
}) {
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
          <Dropdown.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={() => handleTableChange("/employees.csv")}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Employees</div>
              Data for Employees
            </div>
          </Dropdown.Item>

          <Dropdown.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            onClick={() => handleTableChange("/customers.csv")}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Customers</div>
              Data for Customers
            </div>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default TableSelector;
