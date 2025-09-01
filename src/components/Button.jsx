 import React from "react";
import { useW } from "../context/Weather";

const Button = ({ value = "Search", onClick }) => {
  const { handleSearch } = useW();

  return (
    <button className="btn" onClick={onClick || handleSearch}>
      {value}
    </button>
  );
};

export default Button;
