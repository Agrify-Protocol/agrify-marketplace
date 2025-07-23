export const toastFn = (toast: (props: any) => void, error: any = null) => {
  toast({
    title: "Oops!",
    description: String(error) ?? "Something went wrong, try again.",
    status: "error",
    position: "top-right",
    duration: 9000,
    isClosable: true,
  });
};
