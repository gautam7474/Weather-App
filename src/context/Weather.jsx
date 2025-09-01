import React, { createContext, useContext, useEffect, useState } from "react";
import { City } from "../api/index.js";

const WContext = createContext();

export const WProvider = ({ children }) => {
  const [data, setData] = useState(null);

  const [searchCity, setSearchCity] = useState("Delhi");

  const [queryCity, setQueryCity] = useState("Delhi");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!queryCity.trim()) return;
        const result = await City(queryCity);
        setData(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [queryCity]);

  const handleSearch = () => {
    if (searchCity.trim()) {
      setQueryCity(searchCity);
    }
  };

  return (
    <WContext.Provider value={{ data, searchCity, setSearchCity, handleSearch }}>
      {children}
    </WContext.Provider>
  );
};

export const useW = () => useContext(WContext);
