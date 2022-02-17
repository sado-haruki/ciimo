import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/components/TheaterForm.module.scss';
import { ReservationSeat } from '../types/Reservation';
import { Seat } from '../types/Theater';
import SeatButton from './SeatButton';

interface TheaterProps {
    seats: Seat[],
    setSelectSeat: React.Dispatch<React.SetStateAction<ReservationSeat | undefined>>
}

const TheaterForm = ({
    seats,
    setSelectSeat
}: TheaterProps) => {
    const [redrawFlg, setRedrawFlg] = useState(false);
    const reservationSeat = useRef<ReservationSeat>()

    const theaterRedraw = () => {
        setRedrawFlg(!redrawFlg);
    }

    useEffect(() => {
    }, [redrawFlg])

    const clickSeat = (seat: ReservationSeat) => {
        const reservationSeatTemp: ReservationSeat = {
            row: seat.row,
            seatName: seat.seatName,
        };

        reservationSeat.current = reservationSeatTemp;
        setSelectSeat(reservationSeat.current);
        return reservationSeat;
    };

    return (
        <>
            <div className={styles.screen}>SCREEN</div>
            {
                seats.map((seat, i) => (
                    <div className={styles.seats} key={i}>
                        <span className={styles.row}>{seat.row}</span>
                        {
                            seat.column.map((columTemp, j) => (
                                <SeatButton
                                    key={i * 100 + j}
                                    reserved={columTemp.reserved}
                                    clickSeat={clickSeat}
                                    seat={{ row: seat.row, seatName: columTemp.seatName }}
                                    redrawFlg={redrawFlg}
                                    setRedrawFlg={setRedrawFlg}
                                    reservationSeat={reservationSeat.current || {}}
                                />
                            ))
                        }
                        <div key={i} />
                    </div>
                ))}       
        </>
    )
}

export default TheaterForm;