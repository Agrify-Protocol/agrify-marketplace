const getStatusProps = (status: string) => {
  switch (status.toLowerCase()) {
    case "delivered":
    case "completed":
      return {
        bg: "rgba(12, 193, 76, 0.1)",
        text: "rgba(12, 193, 76, 1)",
      };
    case "inprogress":
    case "pending":
    case "processing":
      return {
        bg: "rgba(245, 203, 37, 0.1)",
        text: "rgba(245, 203, 37, 1)",
      };
    case "intransit":
      return {
        bg: "rgba(0, 174, 239, 0.1)",
        text: "rgba(0, 174, 239, 1)",
      };

    case "created":
      return {
        bg: "rgba(255, 152, 0, 0.1)",
        text: "rgba(255, 152, 0, 1)",
      };
    case "cancelled":
      return {
        bg: "rgba(255, 0, 0, 0.05)",
        text: "rgba(255, 0, 0, 1)",
      };
    default:
      return {
        bg: "rgba(175, 174, 169, 0.1)",
        text: "rgb(61, 61, 60)",
      };
  }
};

export default getStatusProps;
