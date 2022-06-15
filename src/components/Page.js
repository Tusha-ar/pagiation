import React from "react";

const Page = ({
  pageIconClassname,
  number,
  currentPage,
  currentPageStyle,
  handleNavigation,
}) => {
  const handleClick = () => {
    handleNavigation(number);
  };
  return (
    <div
      onClick={handleClick}
      className={`${pageIconClassname || "nav_icon"} ${
        currentPage ? currentPageStyle || "current_page" : null
      }`}
    >
      {number}
    </div>
  );
};

export default Page;
