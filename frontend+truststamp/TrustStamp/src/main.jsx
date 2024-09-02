// import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Wrap your App component with the Provider
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
