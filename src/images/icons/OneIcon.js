import * as React from "react";
const SvgOneIcon = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={32} cy={32} r={30} stroke="#fff" strokeWidth={4} />
    <path
      stroke="#fff"
      strokeWidth={4}
      strokeLinecap="round"
      d="M32 17v30M27 47h10M31.586 17.052 26 23"
    />
  </svg>
);
export default SvgOneIcon;
