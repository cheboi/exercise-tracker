import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ExerciseForm from "./components/ExerciseForm";
import ExerciseList from "./components/ExerciseList";
import GoalsTracker from "./components/GoalsTracker";
import ProgressChart from "./components/ProgressChart";
// import Authentication from "./components/Authentication";
import "./styles/styles.css";

const App = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [exercises, setExercises] = useState([]);
  const [user, setUser] = useState(null);

  const addExercise = (exercise) => setExercises([...exercises, exercise]);
  const deleteExercise = (index) =>
    setExercises(exercises.filter((_, i) => i !== index));

  return (
    <div>
      <Navbar setActivePage={setActivePage} />
      {/* {!user ? (
        <Authentication setUser={setUser} />
      ) : ( */}
        <>
          {activePage === "dashboard" && (
            <Dashboard totalWorkouts={exercises.length} streak={5} />
          )}
          {activePage === "exercises" && (
            <>
              <ExerciseForm addExercise={addExercise} />
              <ExerciseList
                exercises={exercises}
                deleteExercise={deleteExercise}
              />
            </>
          )}
          {activePage === "goals" && <GoalsTracker />}
          {activePage === "progress" && <ProgressChart exercises={exercises} />}
        </>
      {/* )} */}
    </div>
  );
};

export default App;
