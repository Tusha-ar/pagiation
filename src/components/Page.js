import React, { useState } from "react";

const Page = ({
  number,
  handleNavigation,
  active,
  activePageNumberStyle,
  pageNumberStyle,
  hoverPageNumberStyle,
  children
}) => {
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    handleNavigation(number);
  };
  const handleHoverStart = () => {
    setHover(true);
  };

  const handleHoverEnd = () => {
    setHover(false);
  };
  if (typeof children === "string") {
    return children;
  } else if (typeof children.type === "function") {
    const temp = React.cloneElement(children, {
      onMouseOver: handleHoverStart,
      onMouseLeave: handleHoverEnd,
      onClick: handleClick,
      style: Object.assign(
        {
          margin: "10px",
          cursor: "pointer",
          userSelect: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        active ? activePageNumberStyle : {},
        pageNumberStyle,
        hover ? hoverPageNumberStyle : {}
      )
    });
    return temp;
  } else {
    return React.createElement(
      children.type || "div",
      {
        onMouseOver: handleHoverStart,
        onMouseLeave: handleHoverEnd,
        onClick: handleClick,
        style: Object.assign(
          {
            margin: "10px",
            cursor: "pointer",
            userSelect: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          },
          active ? activePageNumberStyle : {},
          pageNumberStyle,
          hover ? hoverPageNumberStyle : {}
        )
      },
      children
    );
  }
};

export default Page;
