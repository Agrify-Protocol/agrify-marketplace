const Delivered = ({ status }: { status: boolean }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12L13.5 13.5L16.5 10.5"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.75 7.50041V6.00041C15.7497 5.73737 15.6803 5.47902 15.5487 5.25129C15.417 5.02355 15.2278 4.83444 15 4.70291L9.75 1.70291C9.52197 1.57126 9.2633 1.50195 9 1.50195C8.7367 1.50195 8.47803 1.57126 8.25 1.70291L3 4.70291C2.7722 4.83444 2.58299 5.02355 2.45135 5.25129C2.31971 5.47902 2.25027 5.73737 2.25 6.00041V12.0004C2.25027 12.2635 2.31971 12.5218 2.45135 12.7495C2.58299 12.9773 2.7722 13.1664 3 13.2979L8.25 16.2979C8.47803 16.4296 8.7367 16.4989 9 16.4989C9.2633 16.4989 9.52197 16.4296 9.75 16.2979L11.25 15.4429"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.625 3.20312L12.375 7.06563"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.46875 5.25L9.00125 9L15.5337 5.25"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 16.5V9"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Delivered;
