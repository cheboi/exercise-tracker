import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import ExercisesList from "./components/ExercisesList.js";
import EditExercise from "./components/EditExercise.js";
import CreateExercise from "./components/CreateExercise.js";
import CreateUser from "./components/CreateUser";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}
export default App;
