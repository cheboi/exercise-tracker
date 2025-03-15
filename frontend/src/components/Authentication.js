import React, { useState } from "react";

const Authentication = ({ setUser }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      setUser(username);
    }
  };

  return (
    <div>
      <h3>🔐 Login</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Authentication;
