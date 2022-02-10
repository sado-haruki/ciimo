import type { NextPage } from "next";
import React, { useState, useEffect, useRef, MouseEventHandler } from "react";
import axios from "axios";
import { Theater, Seat, Column } from "../../types/Theater";
import { Reservation, ReservationSeat } from "../../types/Reservation";
import Link from "next/link";
import Header from "../../components/Header";

import styles from "../../styles/seatSelect/index.module.scss";
import SeatButton from "../../components/SeatButton";

const toJson = (data: string | null) => {
  return data ? JSON.parse(data) : null;
};

const SeatSelect: NextPage = () => {
  const seats = useRef<Seat[]>([]);
  const reservationSeat = useRef<ReservationSeat>();
  const [readFlg, setReadFlg] = useState(false);

  useEffect(() => {
    theaterGetJson();
  }, []);

  const theaterGetJson = () => {
    const reservation = toJson(
      localStorage.getItem("reservation")
    ) as Reservation;
    axios.get("http://localhost:5000/theater/").then((response) => {
      const theaters: Theater[] = response.data;
      seats.current =
        theaters
          .find((theater) => theater.id === reservation.theaterId)
          ?.film.find((f) => f.id === reservation.filmId)
          ?.schedule.find((s) => s.id === reservation.scheduleId)?.seat || [];
      console.log(seats);
      setReadFlg(true);
    });
  };

  const clickSeat = (seat: ReservationSeat) => {
    const reservationSeatTemp: ReservationSeat = {
      row: seat.row,
      seatName: seat.seatName,
    };

    reservationSeat.current = reservationSeatTemp;
  };

  const clickConfirm = (e: any) => {
    e.stopPropagation();
    theaterGetJson();

    const reservedTemp = seats.current
      .find((seat) => seat.row === reservationSeat.current?.row)
      ?.column.find(
        (columnTemp) =>
          columnTemp.seatName === reservationSeat.current?.seatName
      )?.reserved;

    if (reservedTemp) {
      e.preventDefault();
      return;
    }

    localStorage.setItem(
      "reservationSeat",
      JSON.stringify(reservationSeat.current)
    );
  };

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.contants}>
          <div className={styles.selectField}>
            {
              // シート情報が取得できた場合
              readFlg ? (
                <>
                  <div className={styles.screen}>SCREEN</div>
                  {seats.current.map((seat, i) => (
                    <div className={styles.seats} key={i}>
                      <span className={styles.row}>{seat.row}</span>
                      {seat.column.map((columTemp, j) => (
                        <SeatButton
                          key={j}
                          selectedSeat={reservationSeat.current || {}}
                          reserved={columTemp.reserved}
                          clickSeat={clickSeat}
                          seat={{ row: seat.row, seatName: columTemp.seatName }}
                        />
                      ))}
                      <div key={i} className={styles.row}>
                        {seat.row}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                // シート情報が取得できていない場合
                <>読み込み中</>
              )
            }
          </div>
          <div className={styles.buttons}>
            <Link href={"/schedule"}>
              <a>
                <button className={styles.back}>検索結果に戻る</button>
              </a>
            </Link>

            <Link href={"/confirm"}>
              <a onClick={clickConfirm}>
                <button className={styles.confirm}>決定する</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeatSelect;
