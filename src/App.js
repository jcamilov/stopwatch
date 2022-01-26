import React, { useEffect } from "react";
import { AppProvider } from "./context/AppContext";
import { themeChange } from "theme-change";
import Navbar from "./components/Navbar";
import SetTimer from "./components/SetTimer";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <React.StrictMode>
      <AppProvider>
        <Navbar />
        <SetTimer className="" />
        <Footer />
      </AppProvider>
    </React.StrictMode>
  );
}

export default App;
