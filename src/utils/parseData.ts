export const parseDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const readableDate = (date: string) => {
  const initial = new Date(date).toDateString();
  const split = initial.split(" ");
  return `${split[1]} ${split[2]}, ${split[3]}`;
};
