import React from "react";

import "./App.scss";

import SelectBuyerType from "./containers/SelectBuyerType/SelectBuyerType";

import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <SelectBuyerType />
    </div>
  );
}

export default App;
