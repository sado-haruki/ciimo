import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import { Film, ScheduleType, Theater } from "../../types/Theater";
import Header from "../../components/Header";
import styles from "../../styles/schedule/index.module.scss";
import Schedule from "../../components/Schedule";

const Index = () => {
  const data = useRef<Theater[]>();
  const [value, setvalue] = useState<Theater[]>();
  const [showDate, setshowDate] = useState("2/7(月)");

  const dateTab = useCallback(():Theater[] => {
    let theaterArray: Theater[] = [];
    if (data.current) {
      data.current.forEach((theater) => {
        let filmArray: Film[] = [];
        theater.film.forEach((film) => {
          let scheduleArray: ScheduleType[] = [];
          film.schedule.forEach((schedule) => {
            if (schedule.date === showDate) {
              scheduleArray.push(schedule);
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
            film: filmArray,
          });
        }
      });
    }
    return theaterArray;
  },[showDate]);

  useEffect(() => setvalue(dateTab()), [showDate,dateTab]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/theater", { timeout: 100 })
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
  }, [, dateTab]);

  return (
    <>
      <Header />
      <div className={styles.main}>
        {/* TODO:検索画面実装時に戻す */}
        {/* <div className={styles.back}>◀︎検索条件に戻る</div> */}
        <div className={styles.title}>検索結果</div>
        <div className={styles.contants}>
          {/* 日付タブ実装時に戻す */}
          <div className={styles.dateTabs}>
            <button
              className={showDate == "2/7(月)"?(styles.selected):(styles.dateTab)}
              onClick={() => setshowDate("2/7(月)")}
            >
              2/7(月)
            </button>
            <button
              className={showDate == "2/8(火)"?(styles.selected):(styles.dateTab)}
              onClick={() => setshowDate("2/8(火)")}
            >
              2/8(火)
            </button>
            <button
              className={showDate == "2/9(水)"?(styles.selected):(styles.dateTab)}
              onClick={() => setshowDate("2/9(水)")}
            >
              2/9(水)
            </button>
            <button
              className={showDate == "2/10(木)"?(styles.selected):(styles.dateTab)}
              onClick={() => setshowDate("2/10(木)")}
            >
              2/10(木)
            </button>
            <button
              className={showDate == "2/11(金)"?(styles.selected):(styles.dateTab)}
              onClick={() => setshowDate("2/11(金)")}
            >
              2/11(金)
            </button>
            <button
              className={showDate == "2/12(土)"?(styles.selected):(styles.dateTab)}
              onClick={() => setshowDate("2/12(土)")}
            >
              2/12(土)
            </button>
            <button
              className={showDate == "2/13(日)"?(styles.selected):(styles.dateTab)}
              onClick={() => setshowDate("2/13(日)")}
            >
              2/13(日)
            </button>
          </div>
          {value ? (
            <Schedule theaters={value}></Schedule>
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Index;
