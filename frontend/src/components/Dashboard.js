import React from "react";

const Dashboard = ({ totalWorkouts, streak }) => {
  return (
    <div className="dashboard">
      <h2>Welcome to Your Fitness Dashboard</h2>
      <p>🔥 Workouts Completed: {totalWorkouts}</p>
      <p>🔥 Current Streak: {streak} Days</p>
    </div>
  );
};

export default Dashboard;
