import React from "react";
import { useW } from "../context/Weather";
const Input = () => {
  const W = useW();

  return (
    <input
      className="input-field"
      placeholder="Search Here..."
      value={W.searchCity}
      onChange={(e) => W.setSearchCity(e.target.value)}
    />
  );
};

export default Input;
