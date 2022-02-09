import type { NextPage } from 'next'
import React, { useState, useEffect, useRef, MouseEventHandler } from 'react'
import axios from 'axios'
import { useRouter } from "next/router";
import {Theater, Seat, Column} from '../../types/Theater'
import { Reservation, ReservationSeat } from '../../types/Reservation';
import Link from 'next/link';
// import style from '../../styles/SeatSelect.sass'

const toJson = (data:string | null) => {
  return data ? JSON.parse(data) : null;
}

const SeatSelect: NextPage = () => {
  const seats = useRef<Seat[]>([]);
  const reservationSeat = useRef<ReservationSeat>();
  const [readFlg, setReadFlg] = useState(false)

  useEffect(() => {
    theaterGetJson();
  },[])

  const theaterGetJson = () => {
    const reservation = toJson(localStorage.getItem('reservation')) as Reservation
    axios.get("http://localhost:5000/theater/").then(response => 
    {
      const theaters:Theater[] = response.data
      seats.current = theaters.find((theater) => theater.id === reservation.theaterId)?.film
      .find((f) => f.id === reservation.filmId)?.schedule
      .find((s) => s.id === reservation.scheduleId)?.seat || []
      console.log(seats);
      setReadFlg(true);
    })
  }

  const clickSeat = (row:string, column:string) => {
    const reservationSeatTemp:ReservationSeat = {
      row: row,
      seatName: column,
    }

    reservationSeat.current = reservationSeatTemp;
  }
  
  const clickConfirm = (e:any) => {
    e.stopPropagation();
    theaterGetJson();

    const reservedTemp = seats.current.find((seat) => (seat.row === reservationSeat.current?.row))?.column
    .find((columnTemp) => columnTemp.seatName === reservationSeat.current?.seatName)?.reserved

    if(reservedTemp){
      e.preventDefault();
      return;
    }

    localStorage.setItem('reservationSeat', JSON.stringify(reservationSeat.current));
  }

  return (
  <>
    {
      // シート情報が取得できた場合
      (readFlg) ? (
        seats.current.map((seat, i) => (
            <>
            {seat.row}
            {
              seat.column.map((columTemp, j) => (
                <button 
                  key={j} 
                  onClick={() => clickSeat(seat.row, columTemp.seatName)} 
                  // className={ columTemp.reserved ? style.notclickablebutton : style.clickablebutton}
                >
                  {columTemp.seatName}
                </button>
              ))
            }
            <div key={i}></div>
            </>
        ))
      ) : 
      // シート情報が取得できていない場合
      (
        <>読み込み中</>
      )
    }

    <Link href={"/schedule"}>
      <a>
        <button>検索結果に戻る</button>
      </a>
    </Link>

    <Link href={"/confirm"}>
      <a onClick={clickConfirm}>
        <button>決定する</button>
      </a>
    </Link>
  </>
  )
}

export default SeatSelect
