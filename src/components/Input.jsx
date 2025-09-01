 import React, { useState, useEffect } from "react";
import { useW } from "../context/Weather";

const Input = () => {
  const W = useW();
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=45b78d8830da4b9aa3c55630252508&q=${query}`
      );
      const data = await res.json();
      setSuggestions(data || []);
    } catch (err) {
      console.error("Error fetching suggestions:", err);
    }
  };

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      fetchSuggestions(W.searchCity);
    }, 400);
    return () => clearTimeout(delayDebounce);
  }, [W.searchCity]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      W.handleSearch();
      setSuggestions([]);
    }
  };

  const handleSelect = (city) => {
    W.setSearchCity(city);
    W.handleSearch();
    setSuggestions([]);
  };

  return (
    <div className="input-wrapper">
      <input
        className="input-field"
        placeholder="Search City..."
        value={W.searchCity}
        onChange={(e) => W.setSearchCity(e.target.value)}
        onKeyDown={handleKeyPress}
      />

      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((city) => (
            <li
              key={city.id}
              onClick={() => handleSelect(city.name)}
              className="suggestion-item"
            >
              {city.name}, {city.region}, {city.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
