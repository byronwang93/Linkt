import * as React from "react";
const SvgInstagram = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={32} cy={32} r={30} stroke="#fff" strokeWidth={4} />
    <rect
      x={15}
      y={17}
      width={34}
      height={30}
      rx={4}
      stroke="#fff"
      strokeWidth={4}
    />
    <circle cx={31.5} cy={31.5} r={5.5} stroke="#fff" strokeWidth={4} />
    <circle cx={42} cy={24} r={2} fill="#fff" />
  </svg>
);
export default SvgInstagram;
