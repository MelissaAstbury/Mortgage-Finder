import React from "react";

import Header from "./components/Header/Header";
import ApplicationForm from "./containers/ApplicationForm/ApplicationForm";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <ApplicationForm />
    </div>
  );
};

export default App;
