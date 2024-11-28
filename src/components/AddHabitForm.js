import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    // TODO: write code to handle form submission
    e.preventDefault();
    if (!habitName.trim()) { 
      return;
    }
    onAddHabit(habitName);
    setHabitName("");
  };

  const handleChange = (e) => {
    setHabitName(e.target.value)
  };

  return (
    //TODO: add a form to add a new habit
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="phone">
          <input placeholder="Type New Habit" value={habitName} onChange={handleChange}/>
        </div>
        <button>Add Habit</button>
      </form>
    </div>
  );
}
