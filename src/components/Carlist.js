import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function Carlist() {
  const [cars, setCars] = useState([]);

  const [columnDefs] = useState([
    { field: "brand", sortable: true, filter: true },
    { field: "model", sortable: true, filter: true },
    { field: "color", sortable: true, filter: true },
    { field: "fuel", sortable: true, filter: true, width: 150 },
    { field: "year", sortable: true, filter: true, width: 100 },
    { field: "price", sortable: true, filter: true, width: 150 },
  ]);

  useEffect(() => {
    //fetch cars
    fetch("http://carrestapi.herokuapp.com/cars")
      .then((response) => response.json())
      .then((data) => setCars(data._embedded.cars))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      className="ag-theme-material"
      style={{ height: 600, width: '90%', margin: "auto" }}
    >
      <AgGridReact
        pagination={true}
        paginationPageSize={10}
        rowData={cars}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
}

export default Carlist;
