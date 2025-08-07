export function formatTimestampShort(isoString: string): string {
  const date: Date = new Date(isoString);

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const time: string = date
    .toLocaleTimeString(undefined, timeOptions)
    .replace(" ", "");
  const formattedDate: string = date.toLocaleDateString(undefined, dateOptions);

  return `${time} - ${formattedDate}`;
}
