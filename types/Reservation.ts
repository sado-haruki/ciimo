export type Reservation = {
    theaterId?: number,
    theaterName?: string,
    filmId?: number,
    filmName?: string,
    scheduleId?: number,
    schedule?: string,
    count?: string,
    ticketType?: string,
    seatName?: string,
    money?: string,
    paymentMethod?: string, 
}

export type ReservationSeat = {
    row?: string,
    seatName?: string,
}