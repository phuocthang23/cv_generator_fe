export const formatDay = (isDay: string) => {
  const date = new Date(isDay);
  const day = date.getDate();
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  return `${year}/${month}/${day}`;
};
