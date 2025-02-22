import React, { useState } from "react";
import "./DataGrid.css"; // Import CSS for styling

const DataGrid = () => {
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const data = [
    { id: 1, name: "Alice", age: 25, city: "New York" },
    { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 22, city: "Chicago" },
    { id: 4, name: "David", age: 28, city: "Houston" },
    { id: 5, name: "Eve", age: 26, city: "Phoenix" },
    { id: 6, name: "Frank", age: 29, city: "New York" },
    { id: 7, name: "Grace", age: 24, city: "Los Angeles" },
  ];

  const filteredData = data
    .filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.age - b.age : b.age - a.age
    );

  return (
    <div className="container">
      <h1 className="title">React DataGrid</h1>
      <input
        type="text"
        className="search-bar"
        placeholder="Search anything..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        className="sort-button"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort by Age ({sortOrder})
      </button>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.age}</td>
                  <td>{row.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
