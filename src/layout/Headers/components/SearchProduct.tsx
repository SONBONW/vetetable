import React from "react";
import iconsearch from "../../../asset/images/iconsearch.svg";

function SearchProduct() {
  return (
    <form className="d-flex" role="search">
      <img src={iconsearch} alt="" className="img-fluid" />
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </form>
  );
}

export default SearchProduct;
