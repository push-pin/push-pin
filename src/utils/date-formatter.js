export default function formattedDate(date) {
  return {
    year: date.slice(0, 4),
    month: date.slice(5, 7),
    day: date.slice(8, 10),
    time: date.slice(11, 16)
  };
}
