import React from "react";

const Navigation = ({
  icon,
  iconClassname,
  disable,
  currentPage,
  handleNavigation,
  type,
  totalPages,
}) => {
  const handleClick = () => {
    switch (type) {
      case "next":
        handleNavigation(currentPage + 1);
        break;
      case "prev":
        handleNavigation(currentPage - 1);
        break;
      case "first":
        handleNavigation(1);
        break;
      case "last":
        handleNavigation(totalPages);
        break;
      default:
        return;
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${iconClassname || "nav_icon"} ${disable && "nav_disable"}`}
    >
      {icon}
    </div>
  );
};

export default Navigation;
