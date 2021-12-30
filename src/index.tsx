import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import "bootswatch/dist/morph/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import Sidebar from "./Components/Sidebar/Sidebar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="container">
        <Navbar></Navbar>
        <Sidebar></Sidebar>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
