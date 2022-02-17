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
      axios.get("http://10.200.13.221:443/theater/").then((response) => {
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

    // 座席が選択されていない場合
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
          {showError ? (
            <div className={styles.errorSpace}>
              <span className={styles.erorrIcon}>!</span>
              <span className={styles.erorrText}>
                座席を選択してください。
              </span>

            </div>
          ) : (<></>)}
          <div className={styles.buttons}>
            <button className={styles.back} onClick={() => {
              history.back();
            }}>検索結果に戻る</button>

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
