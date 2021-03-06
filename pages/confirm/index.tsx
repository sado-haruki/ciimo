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
      axios.get("https://my-json-server.typicode.com/sado-haruki/dbjson/theater/").then((res) => {
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
            `https://my-json-server.typicode.com/sado-haruki/dbjson/theater/${storage.theaterId}`
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
              `https://my-json-server.typicode.com/sado-haruki/dbjson/theater/${storage.theaterId}`,
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
                <label className={styles.label}>?????????</label>
                <span className={styles.item}>{storage.theaterName}</span>
              </div>
              <div>
                <label className={styles.label}>??????</label>
                <span className={styles.item}>{storage.filmName}</span>
              </div>
              <div>
                <label className={styles.label}>????????????</label>
                <span className={styles.item}>{storage.schedule}</span>
              </div>
              <div>
                <label className={styles.label}>??????</label>
                <span className={styles.item}>
                  {seat.row}-{seat.seatName}
                </span>
              </div>
              {/* <div>
              <label>????????????</label>
              <span>??????(20?????????) 1???</span>
            </div>
            <div>
              <label>???????????????</label>
              <span>???????????????</span>
            </div>
            <div>
              <label>??????</label>
              <span>?? 1,800</span>
            </div> */}
            </div>
          </div>
          <div className={styles.buttons}>
            <button
              onClick={() => {
                history.back();
              }}
              className={styles.back}
            >
              ??????
            </button>
            <button onClick={clickConfirm} className={styles.complete}>
              ?????????????????????
            </button>
          </div>
          {modal ? (
            <div className={styles.overlay}>
              <div className={styles.modalField}>
                <div className={styles.contants}>
                  <div className={styles.captions}>
                    <span className={styles.erorrIcon}>!</span>
                    <span className={styles.erorrText}>
                      ???????????????????????????????????????????????????
                    </span>
                    <div>?????????????????????????????????</div>
                  </div>
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
                  <div className={styles.buttons}>
                    <Link passHref href={"/seatSelect"}>
                        <button className={styles.back}>
                          ???????????????????????????
                        </button>
                    </Link>

                    <Link passHref href={"/confirm"}>
                        <button onClick={confirm} className={styles.confirm} disabled={selectSeat ? false : true}>????????????</button>
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
