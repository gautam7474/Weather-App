 import React from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import Button from "./components/Button";
import { useW, WProvider } from "./context/Weather";
import "./App.css";

function AppContent() {

  return (
    <div className="Wmain">
      <h1 className="title">Weather Forecast</h1>

      <Input />
      <Button value="Search" />
      <Card />
      <Button value="Refresh" />
    </div>
  );
}

export default function App() {
  return (
    <WProvider>
      <AppContent />
    </WProvider>
  );
}
