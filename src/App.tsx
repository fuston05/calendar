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
    if (calendarEle.style.display === 'none') {
      calendarEle.style.display = 'block';
    } else {
      calendarEle.style.display = 'none';
    }
  }

  return <div className="App">
    <Calendar />
    <button style={{ position: 'absolute', top: 0, right: 0}} onClick={startCalendly} >Schedule</button>
  </div>;
}

export default App;
