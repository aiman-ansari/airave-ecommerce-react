import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from 'react-router-dom'
import { DataProvider } from "./Context/DataContext/DataContext";
import { AuthProvider } from "./Context/AuthContext/AuthContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
