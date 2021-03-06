import type { NextPage } from "next";
import React, { useState, useEffect, useRef, createContext } from "react";
import axios from "axios";
import { Theater, Seat } from "../../types/Theater";
import { Reservation, ReservationSeat } from "../../types/Reservation";
import Link from "next/link";
import Header from "../../components/Header";
import styles from "../../styles/seatSelect/index.module.scss";
import TheaterForm from "../../components/TheaterForm";
import Flow from "../../components/Flow";

const toJson = (data: string | null) => {
  return data ? JSON.parse(data) : null;
};

export const ReservationSeatContext = createContext<any>(null)

const SeatSelect: NextPage = () => {
  const seats = useRef<Seat[]>([]);
  const [showError, setShowError] = useState(false);
  const [selectSeat, setSelectSeat] = useState<ReservationSeat>()
  const [readFlg, setReadFlg] = useState(false);

  useEffect(() => {
    theaterGetJson();
  }, []);

  const theaterGetJson = () => {
    const reservation = toJson(
      localStorage.getItem("reservation")
    ) as Reservation;
    axios.get("http://localhost:5000/theater/", { timeout: 500 }).then((response) => {
      const theaters: Theater[] = response.data;
      seats.current =
        theaters
          .find((theater) => theater.id === reservation.theaterId)
          ?.film.find((f) => f.id === reservation.filmId)
          ?.schedule.find((s) => s.id === reservation.scheduleId)?.seat || [];
      setReadFlg(true);
    }).catch((e) => {
      axios.get("https://my-json-server.typicode.com/sado-haruki/dbjson/theater/").then((response) => {
        const theaters: Theater[] = response.data;
        seats.current =
          theaters
            .find((theater) => theater.id === reservation.theaterId)
            ?.film.find((f) => f.id === reservation.filmId)
            ?.schedule.find((s) => s.id === reservation.scheduleId)?.seat || [];
        setReadFlg(true);
      });
    })
  };

  const clickConfirm = (e: any) => {
    e.stopPropagation();
    theaterGetJson();

    const reservedTemp = seats.current
      .find((seat) => seat.row === selectSeat?.row)
      ?.column.find(
        (columnTemp) =>
          columnTemp.seatName === selectSeat?.seatName
      )?.reserved;

    // ???????????????????????????????????????
    if (reservedTemp === undefined) {
      setShowError(true);
      e.preventDefault();
      return;
    }

    localStorage.setItem(
      "reservationSeat",
      JSON.stringify(selectSeat)
    );
  };

  return (
    <>
      <Header />
      <div className={styles.main}>
        <Flow select={1} />
        <div className={styles.contants}>
          <div className={styles.selectField}>
            {
              // ???????????????????????????????????????
              readFlg ? (
                <TheaterForm
                  seats={seats.current}
                  setSelectSeat={setSelectSeat || {}}
                />
              ) : (
                // ????????????????????????????????????????????????
                <>???????????????</>
              )
            }
          </div>
          {showError ? (
            <div className={styles.errorSpace}>
              <span className={styles.erorrIcon}>!</span>
              <span className={styles.erorrText}>
                ????????????????????????????????????
              </span>

            </div>
          ) : (<></>)}
          <div className={styles.buttons}>
            <button className={styles.back} onClick={() => {
              history.back();
            }}>?????????????????????</button>

            <Link passHref href={"/confirm"}>
                <button onClick={clickConfirm} className={styles.confirm}>????????????</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeatSelect;
