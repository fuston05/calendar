// Calendar JSX File
import React from "react";
import { InlineWidget } from "react-calendly";
import "./calendar.css";

export const Calendar = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div id="calCont" ref={ref}>
      <InlineWidget url="https://calendly.com/scott-a-fuston/schedule-some-work" />
    </div>
  );
});

// export const Calendar = React.forwardRef<HTMLElement>(ref) => {
//   return (
//     <div id="calCont" ref= {ref}>
//       <InlineWidget url="https://calendly.com/scott-a-fuston/schedule-some-work" />
//     </div>
//   )};
