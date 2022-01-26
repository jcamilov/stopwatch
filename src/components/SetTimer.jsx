import React from "react";
import { useContext, useEffect, useState } from "react";
import AppContext from "../context/AppContext";

function SetTimer() {
  const [intervalId, setIntervalId] = useState(0);

  const {
    minutes,
    seconds,
    counter,
    finishTrigger,
    setTheMinutes,
    setTheSeconds,
    buttonState,
    setTheButtonState,
    setTheCounter,
    setTriggerFinished,
  } = useContext(AppContext);

  useEffect(() => {
    if (counter === 0 && buttonState.startButton.caption === "PAUSE") {
      stopPauseTimer("START");
      setTriggerFinished(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, [counter]);

  const handleMinChange = (e) => {
    setTheMinutes(e.target.value);
  };

  const handleSecondsChange = (e) => {
    setTheSeconds(e.target.value);
  };

  const handleClickStart = (e) => {
    switch (buttonState.startButton.caption) {
      case "START":
        setTheButtonState("PAUSE");
        setTheCounter(Number(minutes) * 60 + Number(seconds));
        setTriggerFinished(false);
        startTimer();
        break;
      case "PAUSE":
        setTheButtonState("CONTINUE");
        stopPauseTimer("pause");
        break;
      case "CONTINUE":
        setTheButtonState("PAUSE");
        startTimer();
        break;
      default:
        break;
    }

    return;
  };

  const startTimer = () => {
    const newIntervalID = setInterval(() => {
      setTheCounter((prevCount) => prevCount - 1);
    }, 1000);
    setIntervalId(newIntervalID);
  };

  const stopPauseTimer = (action) => {
    setTheButtonState(action === "pause" ? "CONTINUE" : "START");
    clearInterval(intervalId);
    setIntervalId(0);
  };

  const handleClickStop = (e) => stopPauseTimer("stop");

  return (
    <div
      className={`bg-slate-300 grid grid-cols-1 rounded-lg border-4 py-9  container mx-auto shadow-lg shadow-slate-600`}
    >
      <div className="grid grid-cols-2 w-80 mx-auto">
        <div className="form-control mx-auto">
          <label className="input-group input-group-md">
            <input
              type="number"
              min="0"
              max="59"
              value={minutes < 10 ? 0 + minutes : minutes}
              disabled={buttonState.stopButton.enabled}
              className="input input-bordered w-20 text-center input-md text-xl font-bold text-slate-600"
              onChange={handleMinChange}
            />
            <span>Min</span>
          </label>
          <input
            type="range"
            max="59"
            value={minutes}
            disabled={buttonState.stopButton.enabled}
            className="range py-4"
            onChange={handleMinChange}
          />
        </div>
        <div className="form-control mx-auto">
          <label className="input-group input-group-md">
            <input
              type="number"
              min="0"
              max="59"
              value={seconds < 10 ? 0 + seconds : seconds}
              disabled={buttonState.stopButton.enabled}
              className="input input-bordered w-20 text-center input-md text-xl font-bold text-slate-600"
              onChange={handleSecondsChange}
            />
            <span>Sec</span>
          </label>
          <input
            type="range"
            max="59"
            value={seconds}
            disabled={buttonState.stopButton.enabled}
            className="range py-4"
            onChange={handleSecondsChange}
          />
        </div>
      </div>
      <div className="place-self-center">
        <div className="btn-group py-5">
          <button
            className={`btn btn-${
              buttonState.startButton.caption === "START"
                ? "success"
                : "warning"
            }`}
            onClick={handleClickStart}
          >
            {buttonState.startButton.caption}
          </button>
          <button
            className="btn btn-error"
            onClick={handleClickStop}
            disabled={!buttonState.stopButton.enabled}
          >
            Stop
          </button>
        </div>
      </div>
      <div className="place-self-center">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-9xl countdown">
              <span style={{ "--value": Math.floor(counter / 60) }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-9xl countdown">
              <span style={{ "--value": counter % 60 }}></span>
            </span>
            sec
          </div>
        </div>
      </div>
    </div>
  );
}

export default SetTimer;
