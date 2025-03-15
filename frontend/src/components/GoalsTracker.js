import React, { useState } from "react";

const GoalsTracker = () => {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (goal.trim() !== "") {
      setGoals([...goals, goal]);
      setGoal("");
    }
  };

  return (
    <div>
      <h3>🎯 Set Your Fitness Goals</h3>
      <input
        type="text"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        placeholder="e.g. Run 5km"
      />
      <button onClick={addGoal}>Add Goal</button>
      <ul>
        {goals.map((g, index) => (
          <li key={index}>✅ {g}</li>
        ))}
      </ul>
    </div>
  );
};

export default GoalsTracker;
