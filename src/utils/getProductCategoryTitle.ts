export const getProductCategoryTitle = (text: string) => {
  return text
    ? text
        ?.split("_")
        ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        ?.join(" ")
    : null;
};
