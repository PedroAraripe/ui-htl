import moment from "moment";

type calendarDate = Object | null;

export const formatDateISO = (date: calendarDate) => (
  date ? moment(date).format("YYYY-MM-DD") : ""
)

export const formatDatePreview = (date: calendarDate) => (
  date ? moment(date).format("DD [de] MMM") : ""
);

export const formatDateReadable = (date: calendarDate) => (
  date ? moment(date).format("DD/MM/YYYY") : ""
);