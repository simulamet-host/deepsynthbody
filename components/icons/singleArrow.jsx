import * as React from "react";
import { RiNumber1 } from "react-icons/fa";
function singleArrow({ fill = "white", ...rest }) {
  return (
    // <svg xmlns="http://www.w3.org/2000/svg"     {...rest}
    // viewBox="0 0 24 24"
    // height="1em" width="1em">
    // <path d="m12.1 38 10.5-14-10.5-14h3.7l10.5 14-10.5 14Zm12.6 0 10.5-14-10.5-14h3.7l10.5 14-10.5 14Z"/></svg>
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
d="M8.025 22 6.25 20.225 14.475 12 6.25 3.775 8.025 2l10 10Z"       fill={fill}
      />
    </svg>

  );
}

export default singleArrow;
