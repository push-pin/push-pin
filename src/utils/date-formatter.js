var months = [
  'January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September',
  'October', 'November', 'December'
  ];

export default function formattedDate(date) {

  let convertTime = date.slice(11, 16);
  convertTime = convertTime.split(':');

  const hours = Number(convertTime[0]);
  const minutes = Number(convertTime[1]);
  let newTime;

  if(hours > 0 && hours <= 12) {
    newTime = '' + hours;
  } else if(hours > 12) {
    newTime = '' + (hours - 12);
  } else if(hours === 0) {
    newTime = '12';
  }
  newTime += (minutes < 10) ? ':0' + minutes : ':' + minutes;
  newTime += (hours >= 12) ? ' PM' : ' AM';

  const month = date.slice(5, 7);

  return {
    year: date.slice(0, 4),
    month: months[parseInt(month) - 1],
    day: date.slice(8, 10),
    time: newTime
  };
}
