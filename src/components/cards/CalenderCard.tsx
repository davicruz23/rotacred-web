import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalenderCard = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="card full-height">
      <h3 className="card-title mb-4 lh-1">Calendar</h3>

      <div className="restaurant-calender">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};
export default CalenderCard;
