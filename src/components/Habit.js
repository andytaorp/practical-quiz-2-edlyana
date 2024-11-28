import React from "react";

/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */
export default function Habit({habits, handleToggleHabit, onRemove}) {
    return(
        <div>
            <li>
                <li style={habits.checked ? { textDecoration: "line-through" } : {}}>
                    <input type="checkbox" onChange={(e) => handleToggleHabit(habits.id, e.target.checked)} handleToggleHabit={handleToggleHabit}></input>
                </li>
                <li><button onClick={() => onRemove(habits.id)} style={{marginLeft: 5, color: "red"}}>X</button></li>
            </li>
        </div>
    )
}
