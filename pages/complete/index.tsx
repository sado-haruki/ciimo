import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/complete.module.scss";
import { Reservation, ReservationSeat } from "../../types/Reservation";
import Header from "../../components/Header";
import Flow from "../../components/Flow";

const ReservationComplete: NextPage = () => {
  const router = useRouter();
  const [storage, setStorage] = useState({} as Reservation);
  const [seat, setSeat] = useState({} as ReservationSeat);

  useEffect(() => {
    setStorage(
      toJsonStorage(localStorage.getItem("reservation")) as Reservation
    );
    setSeat(toJsonStorage(localStorage.getItem("reservationSeat")) as ReservationSeat);
  }, []);

  const toJsonStorage = (storage: string | null): string => {
    if (storage !== null) {
      return JSON.parse(storage);
    }
    return "";
  };

  const clickTop = () => {
    localStorage.clear();
    router.push({
      pathname: "../search",
    });
  };

  return (
    <>
    <Header/>
    <div className={styles.container}>
    <Flow select={3}/>
      <main className={styles.main}>
        <h1 className={styles.title}>予約が完了しました。</h1>
        <div className={styles.items}>
          <div>
            <div>
              <label className={styles.label}>支払番号</label>
              <span className={styles.paymentCode}>{router.query.paymentCode}</span>
            </div>
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
        <button onClick={clickTop} className={styles.backTop}>TOPページに戻る</button>
      </main>
    </div>
    </>
  );
};

export default ReservationComplete;
