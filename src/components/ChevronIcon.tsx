import React from "react";

type Props = {
  className?: string;
};

const ChevronIcon: React.FunctionComponent<Props> = ({ className }) => {
  return (
    <svg
      aria-labelledby="chevron-16"
      className={`h-4 w-4 transform fill-current text-primary ${className}`}
      data-testid="data-testid-Icon"
      focusable="false"
      role="img"
      viewBox="0 0 50 50"
    >
      <title id="chevron-16">chevron</title>
      <g>
        <polygon points="25,31.3 4.2,10.5 0.1,14.6 25,39.5 50,14.6 45.9,10.5"></polygon>
      </g>
    </svg>
  );
};

export default ChevronIcon;
