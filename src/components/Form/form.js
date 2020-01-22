import React from "react";
import "./form.css";

/**
 * Form will used to submit a workout for that day
 *
 */
export default function Form(onSubmit) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label for="sets">Sets</label>
        <input id="sets" />
      </div>
      <div>
        <label for="reps">Reps</label>
        <input id="reps" />
      </div>
      <div>
        <label for="weight">Weight</label>
        <input id="weight" />
      </div>
      <button>Submit</button>
    </form>
  );
}
