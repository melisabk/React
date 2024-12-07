import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // HTML'deki 'root' div'ine bağlanır
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
