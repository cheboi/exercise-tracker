import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ setActivePage }) => {
  return (
    <nav className="navbar">
      <h1>🏋️ Exercise Tracker</h1>
      <div>
        <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
        <button onClick={() => setActivePage("exercises")}>Exercises</button>
        <button onClick={() => setActivePage("goals")}>Goals</button>
        <button onClick={() => setActivePage("progress")}>Progress</button>
      </div>
    </nav>
  );
};

export default Navbar;
