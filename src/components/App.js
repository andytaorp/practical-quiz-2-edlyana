import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";
import Habit from "./Habit";

function App() {
  const [habits, setHabits] = useState([]);

  const handleAddHabit = (habits) => {
    // TODO: write code to add a new habit here
    setHabits((prev) => {
      return [...prev, habits];   // Adding new items into the list
    });
  };

  const handleToggleHabit = (id, checked) => {
    // TODO: write code to toggle a habit's status
    setHabits((prev) =>
      prev.map((habits) => 
        habits.id === id ? {...habits, checked} : habits))
  };

  const handleDeleteHabit = (id, habits) => {
    // TODO: write code to delete a habit
    setHabits((prev) => prev.filter((habits) => habits.id !== id));
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      {/*TODO: add a form to add a new habit*/}
      <AddHabitForm handleAddHabit={handleAddHabit}/>
      {/*TODO: add a list of habits*/}
      <Habit key={habits.id} handleToggleHabit={handleToggleHabit} habits={habits} handleDeleteHabit={handleDeleteHabit}/>
    </div>
  );
}

export default App;
