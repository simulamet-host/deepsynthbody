import * as React from "react";

function modelsIcon({ fill = "white", ...rest }) {
  return (
    <svg
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path d="M3 19V5h18v14ZM5 9h2V7H5Zm4 0h10V7H9Zm0 4h10v-2H9Zm0 4h10v-2H9Zm-4 0h2v-2H5Zm0-4h2v-2H5Z"  fill={fill}
    />
  </svg>
  );
}

export default modelsIcon;
