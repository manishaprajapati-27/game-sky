import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createStore } from "redux";

const store = createStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
