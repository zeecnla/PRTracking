import React, { useState, useEffect } from "react";
import "./calender.css";

/**
 * custom Calender that will add a shade for every time visited
 */

const Calender = () => {
  const today = new Date();
  const month = [];
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  const [selectedMonth, updateSelectedMonth] = useState(
    month[today.getMonth()]
  );
  const [selectedYear, updateSelectedYear] = useState(today.getFullYear());
  useEffect(() => {
    updateCalender(today);
  }, []);
  function previous() {
    const date = today.setMonth(-1);
    console.log(date);
  }
  function next() {}
  function updateCalender(date) {
    let table = document.getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    const startOfMonth = new Date(date.getFullYear(), date.getMonth()).getDay();
    const numOfDays =
      32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
    let day = 1;
    table = document.getElementsByTagName("tbody")[0];

    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        //empty cell
        if (i === 0 && j < startOfMonth) {
          let td = document.createElement("td");
          td.classList.add("empty");
          row.append(td);
        } else if (day > numOfDays) {
          break;
        } else {
          let td = document.createElement("td");
          td.textContent = day;
          td.title = day;
          td.classList.add("fill");
          td.addEventListener("click", onClickDate);
          row.append(td);
          day++;
        }
      }
      table.append(row);
    }
  }
  function onClickDate(e) {
    console.log(e);
    alert(e);
  }
  return (
    <div class="calender-wrapper">
      <h2>
        {selectedMonth} {selectedYear}
      </h2>
      <button onClick={previous}>prev</button>
      <button onClick={next}>next</button>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody />
      </table>
    </div>
  );
};

export default Calender;
