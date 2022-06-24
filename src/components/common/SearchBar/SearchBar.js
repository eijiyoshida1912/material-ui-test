import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";

const SearchBar = ({ placeholder, onChange, searchBarWidth }) => {
  return (
    <div>
      <SearchIcon />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: searchBarWidth,
          color: "rgba(0,0,0,0.6)",
          fontSize: "1.1rem",
        }}
      />
    </div>
  );
};

export default SearchBar;
