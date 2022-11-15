import * as React from "react";

function doubleArrow({ fill = "white", ...rest }) {
  return (
    <svg
    width={28}
    height={28}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="m6.05 19 5-7-5-7H8.5l5 7-5 7ZM12 19l5-7-5-7h2.45l5 7-5 7Z"      fill={fill}
    />
  </svg>
  );
}

export default doubleArrow;
