const amPeriod: string = 'am';
const pmPeriod: string = 'pm';
const twelveHours: number = 12;

function setPadStart (timeUnit: number): string {
  return timeUnit.toString().padStart(2, '0');
}

function formatHours (hoursTwentyFour: number): number {
  if (hoursTwentyFour === 0) return twelveHours;
  return hoursTwentyFour > twelveHours ? hoursTwentyFour - twelveHours : hoursTwentyFour;
}

function getCurrentDateAndTime(): string {
  const today = new Date();
  const day: string = String(today.getDate());
  const month: string = String(today.getMonth() + 1);
  const year: number = today.getFullYear();
  const hoursTwentyFourHourClock: number = today.getHours()
  const isAm: boolean = hoursTwentyFourHourClock < twelveHours;
  const timePeriod: string = isAm ? amPeriod : pmPeriod;
  const hours: number = formatHours(hoursTwentyFourHourClock);
  const time: string = `${hours}:${setPadStart(today.getMinutes())}`;
  return `${month}/${day}/${year} at ${time} ${timePeriod}`;
}

export default getCurrentDateAndTime;
