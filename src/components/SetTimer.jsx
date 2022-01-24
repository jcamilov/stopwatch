import React from "react";
import { useContext } from "react";
import AppContext from "../context/AppContext";

function SetTimer() {
  const { minutes, seconds, setTheMinutes, setTheSeconds } =
    useContext(AppContext);

  const handleMinChange = () => {};
  return (
    <div className="grid grid-cols-2">
      <div className="form-control mx-auto">
        <label className="input-group input-group-md">
          <input
            type="text"
            value={minutes}
            className="input input-bordered input-md text-xl font-bold text-zinc-400"
            onChange={setTheMinutes(0)}
          />
          <span>Min</span>
        </label>
        <input
          type="range"
          max="100"
          value={minutes}
          className="range py-4"
          onChange={setTheMinutes(minutes)}
        />
      </div>
    </div>
  );
}

export default SetTimer;
