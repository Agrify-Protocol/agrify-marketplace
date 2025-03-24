const Arrived = ({ status }: { status: boolean }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5725 9.70125C14.8403 8.976 15 8.235 15 7.5C15 5.9087 14.3679 4.38258 13.2426 3.25736C12.1174 2.13214 10.5913 1.5 9 1.5C7.4087 1.5 5.88258 2.13214 4.75736 3.25736C3.63214 4.38258 3 5.9087 3 7.5C3 11.2448 7.15425 15.1447 8.54925 16.3492C8.67921 16.447 8.8374 16.4998 9 16.4998C9.1626 16.4998 9.32079 16.447 9.45075 16.3492C9.65707 16.1707 9.86035 15.9887 10.0605 15.8032"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13.5L13.5 15L16.5 12"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrived;
