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
  const [filteredExercises, setFilteredExercises] = useState([]);

  const addExercise = (exercise) => setExercises([...exercises, exercise]);
  const deleteExercise = (index) =>
    setExercises(exercises.filter((_, i) => i !== index));

  const handleSearch = (query) => {
    const filtered = exercises.filter((exercise) =>
      exercise.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredExercises(filtered);
  };
  return (
    <div>
      <Navbar setActivePage={setActivePage} onSearch={handleSearch} />
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
              exercises={
                filteredExercises.length > 0 ? filteredExercises : exercises
              }
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
