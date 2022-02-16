export type Theater = {
    id: number,
    name: string,
    areaId: number,
    film: Film[],
}

export type Film = {
    id: number,
    name: string,
    schedule: ScheduleType[],
}

export type ScheduleType = {
    id: number,
    date: string,
    startTime: string,
    endTime: string,
    seat: Seat[],
}

export type Seat = {
    row: string,
    column: Column[],
}

export type Column = {
    seatName: string,
    reserved: boolean,
    zoneId: number
}