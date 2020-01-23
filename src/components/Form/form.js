import React, { useState } from "react";
import "./form.css";

/**
 * Form will used to submit a workout for that day
 *
 */
export default function Form() {
  const [set, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  function Submit(e) {
    e.preventDefault();
    //add form here
    console.log(e);
  }

  return (
    <form onSubmit={this.Submit}>
      <div className="form-wrap">
        <label htmlFor="sets">Sets</label>
        <input id="sets" value={set} onChange={e => setSets(e.target.value)} />
      </div>
      <div className="form-wrap">
        <label htmlFor="reps">Reps</label>
        <input id="reps" value={reps} onChange={e => setReps(e.target.value)} />
      </div>
      <div className="form-wrap">
        <label htmlFor="weight">Weight</label>
        <input
          id="weight"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </div>
      <button className="button">Submit</button>
    </form>
  );
}
