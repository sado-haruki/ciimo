import React, { useState } from 'react'
import styles from '../styles/components/SeatButton.module.scss';
import { ReservationSeat } from '../types/Reservation';

interface seatButtonProps {
    key: number;
    selectedSeat: ReservationSeat;
    seat: ReservationSeat;
    reserved: boolean;
    clickSeat: Function;
}

const SeatButton = ({ key, selectedSeat, reserved, clickSeat, seat }: seatButtonProps) => {
    const [selectedFlg, setSelectedFlg] = useState(false)
    
    return (
        <button
            key={key}
            onClick={() => {
                clickSeat(seat);
                setSelectedFlg(!(selectedSeat === seat))
            }}
            className={
                `${selectedFlg ? styles.selected : styles.notSelected} 
                ${reserved ? styles.notClickablebutton : styles.clickablebutton}`
            }
        >
            {seat.seatName}
        </button>
    )
}

export default SeatButton;