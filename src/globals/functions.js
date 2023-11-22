//*this function generate an array of time every 30 min
//* example [00:00,00:30,01:00,01:30...]
export function createIntervalTime(startHour) {
  const interval = [];
  const baseDate = new Date();
  baseDate.setHours(startHour, 0, 0, 0);

  for (let i = 0; i < 68 - startHour; i++) {
    const hour = baseDate.getHours();
    const minutes = baseDate.getMinutes();
    interval.push(
      `${hour < 10 ? "0" : ""}${hour}:${minutes < 10 ? "0" : ""}${minutes}`
    );

    baseDate.setMinutes(baseDate.getMinutes() + 30);
  }

  return interval;
}

//* get a string date 12/08/2021, 21:02:5
//* return the hour of the given date example: 21
export const getStartHour = (someDate) => {
  const startDate = someDate;
  const objDate = new Date(startDate);
  return objDate.getHours();
};

//* get "duration": "05:05:00"
//* ereturn "5h 5min"
export function timeFormat(time) {
  const divideTime = time.split(":");
  const h = parseInt(divideTime[0], 10);
  const m = parseInt(divideTime[1], 10);

  let timeFormatted = "";

  if (h > 0) {
    timeFormatted += `${h}h `;
  }

  if (m > 0 || h === 0) {
    timeFormatted += `${m}min`;
  }

  return timeFormatted;
}
