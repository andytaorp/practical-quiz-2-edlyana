import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habits, handleToggleHabit, handleDeleteHabit}) {
    return(
        <li style={habits.checked ? { textDecoration: "line-through" } : {}}>
      <label>
        <input
          type="checkbox"
          checked={habits.checked}
          onChange={(e) => handleToggleHabit(habits.id, e.target.checked)}
        />
        {habits.name}
      </label>
      <button onClick={() => handleDeleteHabit(habits.id)} style={{ marginLeft: 5, color: "red" }}>
        X
      </button>
    </li>
    )
}
