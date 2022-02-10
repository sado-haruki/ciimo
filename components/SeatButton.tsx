import React, { useState } from "react";
import styles from "../styles/components/seatButton.module.scss";
import { ReservationSeat } from "../types/Reservation";

interface seatButtonProps {
  key: number;
  selectedSeat: ReservationSeat;
  seat: ReservationSeat;
  reserved: boolean;
  clickSeat: Function;
}

const SeatButton = ({
  key,
  selectedSeat,
  reserved,
  clickSeat,
  seat,
}: seatButtonProps) => {
  const [selectedFlg, setSelectedFlg] = useState(false);

  return (
    <button
      key={key}
      onClick={() => {
        clickSeat(seat);
        setSelectedFlg(!(selectedSeat === seat));
      }}
      className={`${selectedFlg ? styles.selected : styles.notSelected} 
                ${reserved ? styles.disabled : styles.abled}`}
    >
      <span className={styles.number}>{seat.seatName}</span>
    </button>
  );
};

export default SeatButton;
