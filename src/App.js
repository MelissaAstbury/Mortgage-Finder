import React, { useState } from "react";

import Header from "./components/Header/Header";
import ApplicationForm from "./containers/ApplicationForm/ApplicationForm";
import Products from "./containers/Products/Products";
import "./App.scss";

const App = () => {
  const [onFormSubmit, setOnFormSubmit] = useState(false);
  return (
    <div className="app">
      <Header />
      {onFormSubmit ? (
        <Products />
      ) : (
        <ApplicationForm setOnFormSubmit={setOnFormSubmit} />
      )}
    </div>
  );
};

export default App;
