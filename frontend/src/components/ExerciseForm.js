import React, { useState } from "react";

const ExerciseForm = ({ addExercise }) => {
  const [exercise, setExercise] = useState({
    name: "",
    duration: "",
    date: "",
  });

  const handleChange = (e) => {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise.name || !exercise.duration || !exercise.date) {
      alert("Please fill all fields!");
      return;
    }
    addExercise(exercise);
    setExercise({ name: "", duration: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Exercise"
        value={exercise.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="duration"
        placeholder="Duration (mins)"
        value={exercise.duration}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={exercise.date}
        onChange={handleChange}
      />
      <button type="submit">Log Exercise</button>
    </form>
  );
};

export default ExerciseForm;
