import { useContext, useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";
import Legend from "./components/Legend";
import VenuMap from "./components/VenuMap";
import AppContext from "./context/appContext";
import AppContextProvider from "./context/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Dashboard />
      <Legend />
      <VenuMap />
    </AppContextProvider>
  );
}

export default App;
