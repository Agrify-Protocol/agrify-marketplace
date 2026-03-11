const getSafeErrorMessage = (error: unknown): string => {
  if (error && typeof error === "object" && "response" in error) {
    const msg = (error as { response?: { data?: { message?: string } } })
      .response?.data?.message;
    if (typeof msg === "string" && msg.length <= 200) return msg;
  }
  return "Something went wrong, try again.";
};

export const toastFn = (toast: (props: any) => void, error: unknown = null) => {
  toast({
    title: "Oops!",
    description: getSafeErrorMessage(error),
    status: "error",
    position: "top-right",
    duration: 9000,
    isClosable: true,
  });
};
