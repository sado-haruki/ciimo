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
  const reservationSeat = useRef<ReservationSeat>();
  const [selectSeat, setSelectSeat] = useState<ReservationSeat>()
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

  const clickConfirm = (e: any) => {
    e.stopPropagation();
    theaterGetJson();

    const reservedTemp = seats.current
        .find((seat) => seat.row === selectSeat?.row)
        ?.column.find(
            (columnTemp) =>
                columnTemp.seatName === selectSeat?.seatName
        )?.reserved;

    if (reservedTemp) {
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
      <Flow select={1}/>
        <div className={styles.contants}>
          <div className={styles.selectField}>
              {
                // シート情報が取得できた場合
                readFlg ? (
                  <TheaterForm
                    seats={seats.current}
                    setSelectSeat={setSelectSeat || {}}
                  />
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
