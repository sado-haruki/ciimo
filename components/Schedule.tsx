import router from "next/router";
import { Film, ScheduleType, Theater } from "../types/Theater";
import { Reservation } from "../types/Reservation";
import styles from "../styles/schedule/schedule.module.scss";

interface ScheduleProps {
  theaters: Theater[];
}

let films: {
  filmId: number;
  filmName: string;
  theaters: {id: number, name: string; schedule: ScheduleType[] }[];
}[] = [];

// TODO: mapの要素の順番を入れ替えるデータを作る
const Schedule = ({ theaters }: ScheduleProps) => {

  films = [];
  theaters.forEach((theater) => {
    theater.film.forEach((film) => {

      if (
        films.length === 0 || 
        !films.some((f) => 
          f.filmName === film.name
        )
      ) {
        films.push({ filmId: film.id,filmName: film.name, theaters: [] });
      }

     films.forEach((f) => {if(f.filmName === film.name){
       f.theaters.push({id: theater.id,name: theater.name , schedule: film.schedule})

     }})
    });
  });

  const isAllReserved = (schedule: ScheduleType): boolean => {
    let result: boolean[] = [];
    schedule.seat.forEach((seat) => {
      result.push(seat.column.some((column) => column.reserved == false));
    });

    return !result.some((result) => result == true);
  };

  const clickSchedule = (
    theater: {id:number, name: string; schedule: ScheduleType[]},
    film: {
      filmId: number,
      filmName: string;
      theaters: { name: string; schedule: ScheduleType[] }[];
    },
    schedule: ScheduleType
  ) => {
    const reservation: Reservation = {
      theaterId: theater.id,
      theaterName: theater.name,
      filmId: film.filmId,
      filmName: film.filmName,
      scheduleId: schedule.id,
      schedule:
        schedule.date + " " + schedule.startTime + "~" + schedule.endTime,
    };

    localStorage.setItem("reservation", JSON.stringify(reservation));
    router.push(`../seatSelect`);
  };

  return (
    <>
      {films.map((film) => (
        <div className={styles.theater} key={film.filmName}>
          {film.filmName}
          {film.theaters.map((theater) => (
            <div className={styles.film} key={theater.name}>
              {theater.name}
              {theater.schedule.map((schedule) =>
                isAllReserved(schedule) ? (
                  <button className={styles.disabled} key={schedule.id}>
                    {`${schedule.startTime}~${schedule.endTime}`}
                    <div>満席</div>
                  </button>
                ) : (
                  <button
                    className={styles.schedule}
                    key={schedule.id}
                    onClick={() => clickSchedule(theater, film, schedule)}
                  >
                    {`${schedule.startTime}~${schedule.endTime}`}
                    <div>予約購入</div>
                  </button>
                )
              )}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Schedule;
