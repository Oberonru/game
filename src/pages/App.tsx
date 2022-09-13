import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import quest from "../quest.json";
import { Router } from "./Router";
import { store } from "../store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
