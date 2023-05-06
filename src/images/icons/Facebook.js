import * as React from "react";
const SvgFacebook = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M27.5 58v4h8v-4h-8ZM42 24a4 4 0 0 0 0-8v8Zm-4.5-4v-4 4Zm-6 38h4V26.5h-8v31.499l4 .001Zm4-31.5c0-.808.29-1.472.669-1.895A1.715 1.715 0 0 1 37.5 24v-8c-6.116 0-10 5.22-10 10.5h8Zm2-2.5H42v-8H37.5v8Z"
      fill="#fff"
    />
    <path d="M22 39.5h19" stroke="#fff" strokeWidth={8} strokeLinecap="round" />
    <circle cx={32} cy={32} r={30} stroke="#fff" strokeWidth={4} />
  </svg>
);
export default SvgFacebook;
