import React, {useEffect} from "react";
import { Calendar } from "./components/Calendar";

// styles
import "./app.css";

function App() {
  let calendarEle: any;

  useEffect(() => {
    calendarEle =  document.getElementById('calCont')
  }, [])
  

  const startCalendly = () => {
    calendarEle.style.display = 'block';
  }

  return <div className="App">
    <Calendar />
    <button onClick={startCalendly} >Schedule</button>
  </div>;
}

export default App;
