import React, { createContext, useContext, useEffect, useState } from "react";
import { City } from "../api/index"; 

 const WContext = createContext();

 export const WProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [searchCity, setSearchCity] = useState("New Delhi"); 

   useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchCity.trim() === "") return;
        const result = await City(searchCity);
        setData(result);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, [searchCity]);

  return (
    <WContext.Provider value={{ data, searchCity, setSearchCity }}>
      {children}
    </WContext.Provider>
  );
};

 export const useW = () => useContext(WContext);
