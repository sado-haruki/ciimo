import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/confirm.module.scss";
import { Reservation, ReservationSeat } from "../../types/Reservation";
import axios from "axios";
import { Theater } from "../../types/Theater";
import Header from "../../components/Header";

const ReservationConfirm: NextPage = () => {
  const router = useRouter();

  const [storage, setStorage] = useState({} as Reservation);
  const [seat, setSeat] = useState({} as ReservationSeat);

  useEffect(() => {
    setStorage(
      toJsonStorage(localStorage.getItem("reservation")) as Reservation
    );
    setSeat(
      toJsonStorage(localStorage.getItem("reservationSeat")) as ReservationSeat
    );
  }, []);

  const toJsonStorage = (storage: string | null): string => {
    if (storage !== null) {
      return JSON.parse(storage);
    }
    return "";
  };

  const clickConfirm = () => {
    axios
      .get(`http://localhost:5000/theater/${storage.theaterId}`)
      .then((response) => {
        const theater: Theater = response.data;

        const reserved = theater.film
          .find((f) => f.id === storage.filmId)
          ?.schedule.find((s) => s.id === storage.scheduleId)
          ?.seat.find((s) => s.row === seat.row)
          ?.column.find((c) => c.seatName === seat.seatName)?.reserved;

        if (reserved) {

          //TODO 座席選択可能モーダルを表示
          return;
        }

        theater.film.find
        ((f) => f.id === storage.filmId)!.schedule.find
        ((s) => s.id === storage.scheduleId)!.seat.find
        ((s) => s.row === seat.row)!.column.find
        ((c) => c.seatName === seat.seatName)!.reserved = true;

        axios
          .put(`http://localhost:5000/theater/${storage.theaterId}`, {
            id : theater.id,
            name : theater.name,
            film : theater.film
          })

        router.push({
          pathname: "complete",
          query: {
            paymentCode: `ABC${storage.theaterId}${storage.filmId}${storage.scheduleId}${seat.row}${seat.seatName}`,
          },
        });
      });
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.items}>
            <div>
              <div>
                <label className={styles.label}>映画館</label>
                <span className={styles.item}>{storage.theaterName}</span>
              </div>
              <div>
                <label className={styles.label}>作品</label>
                <span className={styles.item}>{storage.filmName}</span>
              </div>
              <div>
                <label className={styles.label}>上映日時</label>
                <span className={styles.item}>{storage.schedule}</span>
              </div>
              <div>
                <label className={styles.label}>座席</label>
                <span className={styles.item}>
                  {seat.row}-{seat.seatName}
                </span>
              </div>
              {/* <div>
              <label>券の種類</label>
              <span>大人(20歳以上) 1枚</span>
            </div>
            <div>
              <label>お支払方法</label>
              <span>後から決済</span>
            </div>
            <div>
              <label>金額</label>
              <span>¥ 1,800</span>
            </div> */}
            </div>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => router.push("seatSelect")} className={styles.back}>戻る</button>
            <button onClick={clickConfirm}　className={styles.complete}>予約を確定する</button>
          </div>
        </main>
      </div>
    </>
  );
};

export default ReservationConfirm;
