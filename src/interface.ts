export interface IDate {
  date: number;
  month: number;
  year: number;
  day?: number;
}

export interface IEvent {
  type?: string;
  title: string;
  startDate: string;
  endDate: string;
  color?: string;
  location?: string;
  description?: string;
  link?: string;
  conferenceId?: string;
}

export interface ICalendar {
  events?: IEvent[];
}

export interface IPos {
  x: number;
  y: number;
}
