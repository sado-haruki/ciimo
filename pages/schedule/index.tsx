import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Film, ScheduleType, Theater } from "../../types/Theater";
import Header from "../../components/Header";
import styles from "../../styles/schedule/index.module.scss";
import Schedule from "../../components/Schedule";
import { useRouter } from "next/router";

const Index = () => {
  const data = useRef<Theater[]>();
  const [value, setvalue] = useState<Theater[]>();
  const [showDate, setshowDate] = useState("2/7(月)");
  const router = useRouter();

  type SearchScedule = {
    filmName: string;
    zoneId: Number;
    areaId: Number;
    frontFree: boolean,
    sideFree: boolean,
  }

  const dateTab = useCallback((): Theater[] => {
    const res: SearchScedule = {
      filmName: typeof(router.query.filmName) === "string" ? router.query.filmName : "",
      zoneId: Number(router.query.zoneId),
      areaId: Number(router.query.areaId),
      frontFree: (router.query.frontFree === "true"),
      sideFree: (router.query.sideFree === "true")
    };

    let theaterArray: Theater[] = [];
    let areaArray: Theater[] = [];
    if (data.current) {
      if(res.areaId == 0){
        areaArray = data.current
      } else {
        areaArray = data.current.filter((t) => t.areaId === res.areaId)}

      areaArray.forEach((theater) => {
        let filmArray: Film[] = [];
        theater.film.forEach((film) => {
          let scheduleArray: ScheduleType[] = [];
          if(!!res.filmName && film.name.indexOf(res.filmName) === -1) {
            return;
          }

          film.schedule.forEach((schedule) => {
            if (schedule.date !== showDate) {
              return;
            }

            let isFrontFree = true;
            if (res.frontFree) {
              isFrontFree = false;
              schedule.seat.forEach((seatTemp) => {
                const rowId = seatTemp.row.charCodeAt(0) - 'A'.charCodeAt(0)
                seatTemp.column.map((columnTemp) => {
                  if (!columnTemp.reserved && (res.zoneId === 0 || columnTemp.zoneId === res.zoneId)) {
                    if (rowId === 0 || !schedule.seat[rowId - 1].column[Number(columnTemp.seatName) - 1].reserved) {
                      isFrontFree = true;
                    }
                  }
                })
              })
            }
            
            let isSideFree = true;
            if (res.sideFree) {
              isSideFree = false;
              schedule.seat.forEach((seatTemp) => {
                const rowId = seatTemp.row.charCodeAt(0) - 'A'.charCodeAt(0)
                seatTemp.column.map((columnTemp) => {
                  if (!columnTemp.reserved && (res.zoneId === 0 || columnTemp.zoneId === res.zoneId)) {
                    if ((columnTemp.seatName === "1" || !schedule.seat[rowId].column[Number(columnTemp.seatName) - 2].reserved) && 
                    (columnTemp.seatName === "6" || !schedule.seat[rowId].column[Number(columnTemp.seatName)].reserved)) {
                      isSideFree = true;
                    }
                  }
                })
              })
            }

            if (res.zoneId !== 0) {
              let isZoneAllReserved: Boolean[] = [];
              schedule.seat.forEach((s) => {
                const zoneSeat = s.column.filter(
                  (c) => c.zoneId === res.zoneId
                );
                if (zoneSeat.length !== 0) {
                  isZoneAllReserved.push(zoneSeat.every((c) => c.reserved))
                }
              });

              if (isZoneAllReserved.some((reserved) => !reserved) && isFrontFree && isSideFree) {
                scheduleArray.push(schedule);
              }
            }
            else{
              if(isFrontFree && isSideFree)scheduleArray.push(schedule);

              let isAllReserved = false;
              schedule.seat.forEach((s) => {
                if (s.column.filter(c => c.zoneId === res.zoneId).every(c => c.reserved)) {
                  isAllReserved = true;
                }
              })
            }
          });
          if (scheduleArray.length !== 0) {
            filmArray.push({
              id: film.id,
              name: film.name,
              schedule: scheduleArray,
            });
          }
        });
        if (filmArray.length !== 0) {
          theaterArray.push({
            id: theater.id,
            name: theater.name,
            areaId: theater.areaId,
            film: filmArray,
          });
        }
      });
    }
    return theaterArray;
  }, [router.query.areaId, router.query.frontFree, router.query.sideFree, router.query.zoneId, showDate]);

  useEffect(() => setvalue(dateTab()), [showDate, dateTab]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/theater", { timeout: 500 })
      .then((response) => {
        data.current = response.data;
        setvalue(dateTab());
      })
      .catch((e) => {
        axios
          .get("https://my-json-server.typicode.com/sado-haruki/dbjson/theater")
          .then((response) => {
            data.current = response.data;
            setvalue(dateTab());
          });
      });
  }, []);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.back} onClick={() => {
              history.back();
            }}>
          ◀︎検索条件に戻る
        </div>
        <div className={styles.title}>検索結果</div>
        <div className={styles.contants}>
          <div className={styles.dateTabs}>
            <button
              className={
                showDate == "2/7(月)" ? styles.selected : styles.dateTab
              }
              onClick={() => setshowDate("2/7(月)")}
            >
              2/7(月)
            </button>
            <button
              className={
                showDate == "2/8(火)" ? styles.selected : styles.dateTab
              }
              onClick={() => setshowDate("2/8(火)")}
            >
              2/8(火)
            </button>
            <button
              className={
                showDate == "2/9(水)" ? styles.selected : styles.dateTab
              }
              onClick={() => setshowDate("2/9(水)")}
            >
              2/9(水)
            </button>
            <button
              className={
                showDate == "2/10(木)" ? styles.selected : styles.dateTab
              }
              onClick={() => setshowDate("2/10(木)")}
            >
              2/10(木)
            </button>
            <button
              className={
                showDate == "2/11(金)" ? styles.selected : styles.dateTab
              }
              onClick={() => setshowDate("2/11(金)")}
            >
              2/11(金)
            </button>
            <button
              className={
                showDate == "2/12(土)" ? styles.selected : styles.dateTab
              }
              onClick={() => setshowDate("2/12(土)")}
            >
              2/12(土)
            </button>
            <button
              className={
                showDate == "2/13(日)" ? styles.selected : styles.dateTab
              }
              onClick={() => setshowDate("2/13(日)")}
            >
              2/13(日)
            </button>
          </div>
          {value ? <Schedule theaters={value}></Schedule> : <div> </div>}
        </div>
      </div>
    </>
  );
};

export default Index;
