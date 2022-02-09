import router from "next/router";
import { Film, Schedule, Theater } from "../../types/Theater";
import { Reservation } from "../../types/Reservation";
import styles from '../../styles/schedule/schedule.module.scss';

interface ScheduleProps {
  theaters: Theater[];
}

// TODO: mapの要素の順番を入れ替えるデータを作る
const Schedule = ({ theaters }: ScheduleProps) => {
  // let films: {
  //   filmName: string;
  //   theaters: { name: string; schedule: {}[] }[];
  // }[] = [];
  // theaters.forEach((theater) => {
  //   theater.film.forEach((film) => {
  //     //findに直す
  //     //重複したら弾く、してなかったらpushする
  //     if (
  //       !films.some((filmfilm) => {
  //         filmfilm.filmName === film.name;
  //       })
  //     ) {
  //       films.push({ filmName: film.name, theaters: [] });
  //       // scheduleを入れる
  //     }
  //     // theater.nameをtheaterName配列にpushする
  //   });
  // });

  // startTimeとendTimeを組み合わせてidとscheduleで渡す

  // 日付タブを押すと日付要素で絞り込んで表示させる

 const clickSchedule = (theater:Theater , film:Film , schedule:Schedule) => {

  const reservation : Reservation = {
    theaterId: theater.id,
    theaterName: theater.name,
    filmId: film.id,
    filmName: film.name,
    scheduleId: schedule.id,
    schedule: schedule.date+" "+schedule.startTime+"~"+schedule.endTime,
  };

  localStorage.setItem("reservation",JSON.stringify(reservation))
  router.push(`../seatSelect`)
 }

  return (
    <>
      {theaters.map((theater) => (
        <div className={styles.theater} key={theater.id}>
          {theater.name}
          {theater.film.map((film) => (
            <div className={styles.film} key={film.id}>
              {film.name}
              {film.schedule.map((schedule) => (
                <button className={styles.schedule} key={schedule.id}
                onClick={()=> clickSchedule(theater , film , schedule)}>
                  {`${schedule.startTime}~${schedule.endTime}`}
                  <div>予約購入</div>
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Schedule;
