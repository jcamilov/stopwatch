import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <nav className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-none lg:flex">
        <BsStopwatch />
      </div>
      <div className="flex-1 px-2 mx-2">
        <span className="text-lg font-bold">Stopwatch</span>
      </div>
      <div className="flex-1 px-2 mx-2 justify-end">
        <button
          data-toggle-theme="dark"
          data-act-class="ACTIVECLASS"
          onClick={() => {}}
        >
          <MdDarkMode />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
