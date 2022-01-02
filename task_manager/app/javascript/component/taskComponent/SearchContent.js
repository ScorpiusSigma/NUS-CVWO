import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const SearchBar = () => {
  const { searchVal, setSearchVal, setSearchCat } = useContext(UserContext);

  return (
    <div className="search-bar">
      <select
        className="task-card"
        id="catSelect"
        onChange={(e) => setSearchCat(e.target.value)}
      >
        <option value={"title"}>Title</option>
        <option value={"category"}>Category</option>
      </select>
      <input
        className="task-card"
        placeholder="Search Bar"
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
