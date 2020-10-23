import React from "react";
import DateRange from "../../components/DataCalendar/DateRangeInput";
import "./BookingModal.css";
import { useHistory } from "react-router-dom";

export default function BookingStage0() {
  const history = useHistory();
  return (
    <div className="componentContainer">
      <div className="dateRangeInputPosition">
        <DateRange
          navigateToRoute={"/BookingStage01"}
          datePosition={"top"}
          text={"REZERVA ACUM"}
        />
      </div>
    </div>
  );
}
