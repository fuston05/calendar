import React, { useEffect, useRef } from "react";
import { Calendar } from "./components/Calendar";

// styles
import "./app.css";
import { log } from "node:console";

function App() {
  let calRef = useRef<HTMLDivElement>(null);
  // let calendarEle: any;

  // useEffect(() => {
  //   // calendarEle= document.getElementById('calCont')
  // }, []);

  const startCalendly = () => {
    // if (calendarEle.style.display === "none") {
    //   calendarEle.style.display = "block";
    // } else {
    //   calendarEle.style.display = "none";
    // }
    if (calRef.current) {
      if (calRef.current.style.display = "none") {
        calRef.current.style.display = "block";
      } else {
        console.log('toggle to none')
        calRef.current.style.display = "none";
      }
    }
  };

  return (
    <div className="App">
      <Calendar ref={calRef} />
      <button
        style={{ position: "absolute", top: 0, right: 0 }}
        onClick={startCalendly}
      >
        Schedule
      </button>
    </div>
  );
}

export default App;
