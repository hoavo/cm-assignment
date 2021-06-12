export const formatMinutesToHourString = (minutesInput) => {
  const hours = Math.floor(minutesInput / 60);
  const minutes = minutesInput % 60;
  return `${hours > 0 ? `${hours} hr ` : ""}${
    minutes > 0 ? `${minutes} min` : ""
  }`;
};
