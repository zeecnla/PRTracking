import React, { useState, useEffect } from "react";
import "./chart.css";
var CanvasJS = require("canvasjs");
/**
 * Chart will be used to get all the information
 * from the user and see the progress
 */
export default function Chart() {
  const dataPoints = [];

  useEffect(() => {
    async function GetData() {
      // populate datapoints in here by calling api
      var chart = this.chart;
      fetch("https://canvasjs.com/data/gallery/react/nifty-stock-price.json")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          for (var i = 0; i < data.length; i++) {
            dataPoints.push({
              x: new Date(data[i].x),
              y: Math.floor(Math.random() * 1000 + 50)
            });
          }
          chart.render();
        });
    }
    GetData();

    const options = {
      theme: "light2",
      title: {
        text: "Squats: All Time Progress"
      },
      axisY: {
        title: "Price in USD",
        prefix: "$",
        includeZero: false
      },
      data: [
        {
          type: "line",
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "####",
          dataPoints: dataPoints
        }
      ]
    };
  }, []);

  return (
    <div>
      <p>hola</p>
    </div>
  );
}
