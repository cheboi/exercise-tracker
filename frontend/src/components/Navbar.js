import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ setActivePage, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value); 
  };

  return (
    <nav className="navbar">
      <h1>🏋️ Exercise Tracker</h1>

      {/* Search Bar */}
      <input
        type="text"
        className="search-bar"
        placeholder="Search exercises..."
        value={searchQuery}
        onChange={handleInputChange}
      />

      <div className="nav-buttons">
        <button onClick={() => setActivePage("dashboard")}>Dashboard</button>
        <button onClick={() => setActivePage("exercises")}>Exercises</button>
        <button onClick={() => setActivePage("goals")}>Goals</button>
        <button onClick={() => setActivePage("progress")}>Progress</button>
      </div>
    </nav>
  );
};

export default Navbar;
