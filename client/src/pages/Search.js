import React from "react";
import API from "../utils/API";

const Search = ()  => {
  const getBooks = (search) => {
    API.getBooks(search)
      .then((results) => {
        console.log(results);
      })
      .catch((err) => console.log("AT SEARCH", err));
  };
  return (
    <>
      {getBooks("The Hitchikers Guide To The Galaxy")}
      <div>
        <h1>HELLO</h1>
      </div>
    </>
  );
}

export default Search;
