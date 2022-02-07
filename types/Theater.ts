export type Theater = {
    id: string,
    name: string,
    film: Film,
}

export type Film = {
    id: string,
    name: string,
    schedule: Schedule,
}

export type Schedule = {
    id: string,
    date: string,
    startTime: string,
    endTime: string,
    seat: Seat,
}

export type Seat = {
    row: string,
    column: Column,
}

export type Column = {
    seatName: string,
    reserved: string,
}