import React from "react";

interface IconProps {
  className?: string;
}

const headerIcon = (path: JSX.Element): React.FC<IconProps> => {
  return ({ className = "h-7 w-7" }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={"white"}
        className={className}
      >
        {path}
      </svg>
    );
  };
};

export const FaceSmile = headerIcon(
  <path
    stroke-linecap="round"
    stroke-linejoin="round"
    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  />
);
