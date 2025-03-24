export const getReportTime = (timeString: string) => {
  const split_1 = timeString.split("T");
  const time_split = split_1[1].split(".");
  return time_split[0];
};
