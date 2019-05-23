import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";

const Search = () => {
  return (
   <>
      <form className="form-inline mt-4 mb-4 col-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </form>
    </>
  );
}

export default Search;