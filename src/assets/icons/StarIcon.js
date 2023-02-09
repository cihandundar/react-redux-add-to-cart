import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m10 0 3.205 6.42L20 7.64l-4.815 5.19.995 7.17L10 16.79 3.82 20l.995-7.17L0 7.64l6.795-1.22L10 0Z"
      fill="#FF0"
    />
  </svg>
);

export default SvgComponent;
