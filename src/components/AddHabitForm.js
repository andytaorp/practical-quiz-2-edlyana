import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    const newHabit = {
      id: Date.now(),
      name: habitName,
      checked: false,
    };
    onAddHabit(newHabit);
    setHabitName("");
  }

  const handleChange1 = ({target}) => {
    const updatedHabitName = target.value;
    setHabitName(updatedHabitName);
  }

  return (
    //TODO: add a form to add a new habit
    <form onSubmit={handleSubmit}>
      <h3>Enter habit name:</h3>
      <input value={habitName} onChange={handleChange1} type="text" id="habitName"/>
      <button type="submit">SUBMIT</button>
    </form>
  );
}
