import * as React from "react";

const ShoppingIcon = (props) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.658 7.75H22.33c5.984 0 6.582 2.385 6.987 5.295l1.584 11.25c.51 3.69-.827 6.705-6.987 6.705H8.092c-6.178 0-7.515-3.015-6.987-6.705l1.584-11.25c.387-2.91.985-5.295 6.97-5.295Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.954 10V4.75c0-2.25 1.76-3.75 4.4-3.75h5.28c2.64 0 4.4 1.5 4.4 3.75V10"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ShoppingIcon;
