import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { AiTwotoneAlert } from "react-icons/ai";

function Alert() {
  const { finishTrigger } = useContext(AppContext);

  return (
    finishTrigger && (
      <div className="alert alert-error mx-auto w-80 my-10">
        <div className="flex-1">
          <AiTwotoneAlert className="color-red" />
          <label className="mx-auto"> Your timer is finished!</label>
        </div>
      </div>
    )
  );
}

export default Alert;
