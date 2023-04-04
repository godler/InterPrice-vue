import months from "./months";

export default function parseDate(date) {
  date = new Date(date);
  return (
    date.getDate() +
    "-" +
    months.shortNames[date.getMonth()] +
    "-" +
    date.getFullYear().toString().substr(-2)
  );
}
