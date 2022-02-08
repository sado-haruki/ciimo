import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Schedule } from "../../types/Schedule";
import { Theater } from "../../types/Theater"

interface ScheduleProps {
  theaters: Theater[]
}

const Schedule = ({ theaters }: ScheduleProps) => {

  return (
    <>
        {theaters.map((theater) =>
          <div key={theater.id}>{theater.name}</div>
        )}
    </>
  );
};

export default Schedule;