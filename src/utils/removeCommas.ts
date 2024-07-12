export const removeCommas = (numString: string) => {
  while (numString.search(",") >= 0) {
    numString = (numString + "").replace(",", "");
  }
  return numString;
};
