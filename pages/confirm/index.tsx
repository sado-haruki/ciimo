import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/complete.module.css";
import { Reservation, ReservationSeat } from "../../types/Reservation";

const ReservationConfirm: NextPage = () => {
  const router = useRouter();

  const [storage, setStorage] =useState({} as Reservation)
  const [seat, setSeat] =useState({} as ReservationSeat)

  useEffect(() => {
    setStorage(toJsonStorage(localStorage.getItem("reservation")) as Reservation);
    setSeat(toJsonStorage(localStorage.getItem("seat")) as ReservationSeat);
  }, [])

  const toJsonStorage = (storage: string | null): string => {
    if (storage !== null) {
      return JSON.parse(storage);
    }
    return "";
  };

  const clickConfirm = () => {

    const a : ReservationSeat = {
        row: 'A',
        seatName: '1'
    }

    localStorage.setItem('paymentCode', 'AAA')
    localStorage.setItem('seat', JSON.stringify(a));
    router.push({
      pathname: "complete",
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <div className={styles.items}>
          <div>
            <div>
              <label>映画館</label>
              <span>{storage.theaterName}</span>
            </div>
            <div>
              <label>作品</label>
              <span>{storage.filmName}</span>
            </div>
            <div>
              <label>上映日時</label>
              <span>{storage.schedule}</span>
            </div>
            <div>
              <label>座席</label>
              <span>{seat.row}-{seat.seatName}</span>
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
        <div>
          <button onClick={() => router.push("SeatSelect")}>戻る</button>
          <button onClick={clickConfirm}>予約を確定する</button>
        </div>
      </main>
    </div>
  );
};

export default ReservationConfirm;
