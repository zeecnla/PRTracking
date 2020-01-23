import React from "react";
import "./app.css";

import Calender from "../Calender/calender";
import Form from "../Form/form";
import Chart from "../Chart/chart";

const App = () => {
  return (
    <div className="App">
      <Chart />
      <Calender />
      <Form />
    </div>
  );
};

export default App;
