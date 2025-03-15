import React from "react";

const ExerciseList = ({ exercises, deleteExercise }) => {
  return (
    <div>
      <h3>Logged Exercises</h3>
      {exercises.length > 0 ? (
        <ul>
          {exercises.map((ex, index) => (
            <li key={index}>
              {ex.name} - {ex.duration} mins - {ex.date}
              <button onClick={() => deleteExercise(index)}>❌</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No exercises logged yet.</p>
      )}
    </div>
  );
};

export default ExerciseList;
