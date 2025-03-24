const Stroke = ({ status }: { status: boolean }) => {
  return (
    <svg
      width="2"
      height="72"
      viewBox="0 0 2 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 0V72"
        stroke={status ? "#0CC14C" : "#A6A6A6"}
        stroke-dasharray="2 2"
      />
    </svg>
  );
};

export default Stroke;
