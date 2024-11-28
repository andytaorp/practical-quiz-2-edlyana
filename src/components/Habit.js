import React from "react";
/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({ habit, onToggleHabit, onDeleteHabit }) {
    return (
      <li>
        <li style={{textDecoration: habit.checked ? "line-through" : "",}}>
          {habit.name}
        </li>
        <input type="checkbox" checked={habit.checked} onChange={() => onToggleHabit(habit.id)}/>
        <button onClick={() => onDeleteHabit(habit.id)}>Delete</button>
      </li>
    );
  }
