import { useEffect } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button"
import { useW } from "./context/Weather"; 
import { City } from "./api";

import "./App.css";

function App() {
  const W = useW(); 

  useEffect(() => {
   
    City("").then((data) => {
      W.setData(data); 
    }, []);
  }, ); 

  return (
    <div className="Wmain">
      <h1 className="title"> Weather Forecast</h1>
      <Input />
       <Button onClick={W.fetchData} value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default App;

