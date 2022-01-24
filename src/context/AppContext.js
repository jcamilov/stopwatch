import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const SetTheme = (dark) => setDarkTheme(dark);

  const setTheMinutes = (min) => {
    setMinutes(min);
  };
  const setTheSeconds = (sec) => {
    setSeconds(sec);
  };

  return (
    <AppContext.Provider
      value={{
        darkTheme,
        setDarkTheme,
        minutes,
        seconds,
        setTheMinutes,
        setTheSeconds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
