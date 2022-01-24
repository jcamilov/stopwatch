import React from "react";
import { useContext } from "react";
import AppContext, { AppProvider } from "./context/AppContext";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import Navbar from "./components/Navbar";
import SetTimer from "./components/SetTimer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <React.StrictMode>
      <AppProvider>
        <Navbar />
        <SetTimer />
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
