import React, { Fragment } from "react";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import '../src/style/style.css'

const App = (_) => {
  return (
    <Fragment>
      <Header />
      <Dashboard />
    </Fragment>
  );
};

export default App;
