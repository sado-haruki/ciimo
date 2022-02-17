import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../styles/confirm.module.scss";
import { Reservation, ReservationSeat } from "../../types/Reservation";
import axios from "axios";
import { Column, Film, ScheduleType, Seat, Theater } from "../../types/Theater";
import Header from "../../components/Header";
import Link from "next/link";
import Flow from "../../components/Flow";
import TheaterForm from "../../components/TheaterForm";

const ReservationConfirm: NextPage = () => {
  const router = useRouter();

  const [storage, setStorage] = useState({} as Reservation);
  const [seat, setSeat] = useState({} as ReservationSeat);
  const [modal, setModal] = useState(false);
  const seats = useRef<Seat[]>([]);
  const reservationSeat = useRef<ReservationSeat>();
  const [selectSeat, setSelectSeat] = useState<ReservationSeat>()
  const [readFlg, setReadFlg] = useState(false);

  const theaterGetJson = useCallback(() => {
    const reservation = toJson(
      localStorage.getItem("reservation")
    ) as Reservation;

    axios.get("http://localhost:5000/theater/", { timeout: 200 }).then((response) => {
      const theaters: Theater[] = response.data;
      seats.current =
        theaters
          .find((theater) => theater.id === reservation.theaterId)
          ?.film.find((f) => f.id === reservation.filmId)
          ?.schedule.find((s) => s.id === reservation.scheduleId)?.seat || [];
      setReadFlg(true);
    }).catch((e) => {
      axios.get("http://10.200.13.221:443/theater/").then((res) => {
        const theaters: Theater[] = res.data;
        seats.current =
          theaters
            .find((theater) => theater.id === reservation.theaterId)
            ?.film.find((f) => f.id === reservation.filmId)
            ?.schedule.find((s) => s.id === reservation.scheduleId)?.seat || [];
        setReadFlg(true);
      })
    });
  }, []);

  useEffect(() => {
    setStorage(
      toJsonStorage(localStorage.getItem("reservation")) as Reservation
    );
    setSeat(
      toJsonStorage(localStorage.getItem("reservationSeat")) as ReservationSeat
    );
    theaterGetJson();
  }, [theaterGetJson]);

  const toJsonStorage = (storage: string | null): string => {
    if (storage !== null) {
      return JSON.parse(storage);
    }
    return "";
  };

  const setReserved = (theater: Theater): Theater => {
    theater.film
      .find((f) => f.id === storage.filmId)!
      .schedule.find((s) => s.id === storage.scheduleId)!
      .seat.find((s) => s.row === seat.row)!
      .column.find((c) => c.seatName === seat.seatName)!.reserved = true;

    return theater;
  };

  const clickConfirm = () => {
    axios
      .get(`http://localhost:5000/theater/${storage.theaterId}`)
      .then((response) => {

        const responseSchedule = response.data.film

          .find((f: Film) => f.id === storage.filmId)
          ?.schedule.find((s: ScheduleType) => s.id === storage.scheduleId);

        const reserved = responseSchedule?.seat
          .find((s: Seat) => s.row === seat.row)
          ?.column.find((c: Column) => c.seatName === seat.seatName)?.reserved;

        if (reserved) {
          seats.current = responseSchedule.seat;
          setModal(true);
          return;
        }

        const theater = setReserved(response.data);
        axios.put(`http://localhost:5000/theater/${storage.theaterId}`, {
          id: theater.id,
          name: theater.name,
          areaId: theater.areaId,
          film: theater.film
        });
        router.push({
          pathname: "../complete",
          query: {
            paymentCode: `ABC${storage.theaterId}${storage.filmId}${storage.scheduleId}${seat.row}${seat.seatName}`,
          },
        });
      })
      .catch((e) => {
        axios
          .get(
            `http://10.200.13.221:443/theater/${storage.theaterId}`
          )
          .then((response) => {
            const responseSchedule = response.data.film

            .find((f: Film) => f.id === storage.filmId)
            ?.schedule.find((s: ScheduleType) => s.id === storage.scheduleId);
  
          const reserved = responseSchedule?.seat
            .find((s: Seat) => s.row === seat.row)
            ?.column.find((c: Column) => c.seatName === seat.seatName)?.reserved;
              if (reserved) {
              seats.current = responseSchedule.seat;
              setModal(true);
              return;
            }
            const theater = setReserved(response.data);
            axios.put(
              `http://10.200.13.221:443/theater/${storage.theaterId}`,
              {
                id: theater.id,
                name: theater.name,
                areaId: theater.areaId,
                film: theater.film,
              }
            );
            router.push({
              pathname: "../complete",
              query: {
                paymentCode: `ABC${storage.theaterId}${storage.filmId}${storage.scheduleId}${seat.row}${seat.seatName}`,
              },
            });
          });
      });
  };

  const toJson = (data: string | null) => {
    return data ? JSON.parse(data) : null;
  };

  const confirm = (e: any) => {
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
      JSON.stringify(selectSeat)
    );
    setModal(false);
    setSeat(
      toJsonStorage(localStorage.getItem("reservationSeat")) as ReservationSeat
    );
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Flow select={2} />
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
            <button
              onClick={() => router.push("../seatSelect")}
              className={styles.back}
            >
              戻る
            </button>
            <button onClick={clickConfirm} className={styles.complete}>
              予約を確定する
            </button>
          </div>
          {modal ? (
            <div className={styles.overlay}>
              <div className={styles.modalField}>
                <div className={styles.contants}>
                  <div className={styles.captions}>
                    <span className={styles.erorrIcon}>!</span>
                    <span className={styles.erorrText}>
                      選択された席は既に予約されています
                    </span>
                    <div>座席を選択してください</div>
                  </div>
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
                    <Link href={"/seatSelect"}>
                      <a>
                        <button className={styles.back}>
                          座席選択画面に戻る
                        </button>
                      </a>
                    </Link>

                    <Link href={"/confirm"}>
                      <a onClick={confirm}>
                        <button className={styles.confirm}>決定する</button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div> </div>
          )}
        </main>
      </div>
    </>
  );
};
export default ReservationConfirm;
