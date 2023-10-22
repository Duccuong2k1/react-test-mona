import { format } from "date-fns";

export function formatDateMonth(inputDate: string) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(inputDate);
  const day = date.getDate();
  const month = months[date.getMonth()];

  return `${day}: ${month}`;
}
export function formatFullDate(inputDate: string) {
  const date = new Date(inputDate);
  const formattedDate = format(date, "EEE, dd MMM, yyyy");

  return formattedDate;
}
