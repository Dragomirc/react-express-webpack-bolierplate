import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import asyncComponent from "./hoc/asyncComponent";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route
          path="/"
          exact
          component={() => <div>Add your home component here</div>}
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
