import React, { useState, useEffect } from "react";
import styles from "../styles/components/seatButton.module.scss";
import { ReservationSeat } from "../types/Reservation";

interface RedrawProps {
  redrawFlg: boolean,
  setRedrawFlg: React.Dispatch<React.SetStateAction<boolean>>,
}

interface seatButtonProps {
  key: number;
  seat: ReservationSeat;
  reserved: boolean;
  clickSeat: Function;
  value?: RedrawProps;
  redrawFlg: boolean;
  setRedrawFlg: React.Dispatch<React.SetStateAction<boolean>>;
  reservationSeat: ReservationSeat;
  inZoneId: boolean;
}

const SeatButton = ({
  key,
  reserved,
  clickSeat,
  seat,
  redrawFlg,
  setRedrawFlg,
  reservationSeat,
  inZoneId
}: seatButtonProps) => {
  const [selectedFlg, setSelectedFlg] = useState(reserved);

  useEffect(() => {
    setSelectedFlg(JSON.stringify(reservationSeat) === JSON.stringify(seat));
    // console.log(seat)
    // console.log(inZoneId)
  }, [redrawFlg])

  return (
    <button
      key={key}
      onClick={() => {
        const seatTemp: ReservationSeat = clickSeat(seat);
        setRedrawFlg(!redrawFlg);
        reservationSeat = seat;
      }}
      className={`${selectedFlg ? styles.selected : styles.notSelected} 
                ${reserved ? styles.disabled : styles.abled} 
                ${inZoneId && !reserved ? styles.inZone: styles.none}`}
    >
      <span className={styles.number}>{seat.seatName}</span>
    </button>
  );
};

export default SeatButton;
