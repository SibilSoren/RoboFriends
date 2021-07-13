import React from "react";
import "./SearchBox.css";

const SearchBox = ({searchChange}) => {
  return (
    <div className="d-flex justify-content-center">
      <input  onChange={searchChange} className="col-3 p-3" type="search" placeholder="Search your Friend"></input>
    </div>
  );
};

export default SearchBox;
