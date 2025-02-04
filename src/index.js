import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />  {/* ✅ No <Router> here, since it's already inside App.js */}
  </React.StrictMode>
);
