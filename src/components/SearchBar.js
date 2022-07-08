import React from "react";

function SearchBar({ handleSearch, searchState }) {

  return (
    <div className="search">
      <input type="text" className="searchTerm" value={searchState} onChange={handleSearch} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
