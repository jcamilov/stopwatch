import { createContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0);
  const [finishTrigger, setFinishTrigger] = useState(false);

  const [buttonState, setButtonState] = useState({
    startButton: {
      caption: "START",
      enabled: true,
    },
    stopButton: {
      caption: "STOP",
      enabled: false,
    },
  });

  const setTheMinutes = (min) => {
    setMinutes(min);
  };
  const setTheSeconds = (sec) => {
    setSeconds(sec);
  };

  const setTheCounter = (count) => {
    setCounter(count);
  };

  const setTriggerFinished = (flag) => {
    setFinishTrigger(flag);
  };

  const setTheButtonState = (nextState) => {
    switch (nextState) {
      case "START":
        setButtonState({
          startButton: { caption: "START", enabled: true },
          stopButton: { enabled: false },
        });
        break;
      case "PAUSE":
        setButtonState({
          startButton: { caption: "PAUSE", enabled: true },
          stopButton: { enabled: true },
        });
        break;
      case "CONTINUE":
        setButtonState({
          startButton: { caption: "CONTINUE", enabled: true },
          stopButton: { enabled: true },
        });
        break;
    }
  };

  return (
    <AppContext.Provider
      value={{
        minutes,
        seconds,
        buttonState,
        counter,
        finishTrigger,
        setTheMinutes,
        setTheSeconds,
        setTheButtonState,
        setTheCounter,
        setTriggerFinished,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
