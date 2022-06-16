import React, { useMemo } from "react";

export default function paginationNav(WrappedComponent) {
  return (props) => {
    const {
      navigationStyle,
      handleNavigation,
      currentPage,
      totalData,
      dataPerPage
    } = props;

    return React.createElement(
      props.children.type || "div",
      {
        style: Object.assign({
          ...navigationStyle,
          padding: "2px 10px",
          cursor: "pointer",
          userSelect: "none"
        })
      },
      <WrappedComponent
        handleNavigation={handleNavigation}
        currentPage={currentPage}
        totalData={totalData}
        dataPerPage={dataPerPage}
      >
        {props.children}
      </WrappedComponent>
    );
  };
}

const NavigationStart = ({ children, handleNavigation, currentPage }) => {
  const handleNavStart = () => {
    handleNavigation(1);
  };

  return React.createElement(
    children.type || "div",
    {
      onClick: handleNavStart,
      style: currentPage === 1 ? { opacity: "0.3", pointerEvents: "none" } : {}
    },
    children.props?.children || children
  );
};

const NavigationEnd = ({
  children,
  handleNavigation,
  totalData,
  dataPerPage,
  currentPage
}) => {
  const lastPageNumber = useMemo(() => totalData / dataPerPage, [
    totalData,
    dataPerPage
  ]);
  const handleNavEnd = () => {
    handleNavigation(lastPageNumber);
  };
  return React.createElement(
    children.type || "div",
    {
      onClick: handleNavEnd,
      style:
        currentPage === lastPageNumber
          ? { opacity: "0.3", pointerEvents: "none" }
          : {}
    },
    children.props?.children || children
  );
};

const NavigationNext = ({
  children,
  handleNavigation,
  currentPage,
  totalData,
  dataPerPage
}) => {
  const lastPageNumber = useMemo(() => totalData / dataPerPage, [
    totalData,
    dataPerPage
  ]);
  const handleNavNext = () => {
    handleNavigation(currentPage + 1);
  };
  return React.createElement(
    children.type || "div",
    {
      onClick: handleNavNext,
      style:
        currentPage === lastPageNumber
          ? { opacity: "0.3", pointerEvents: "none" }
          : {}
    },
    children.props?.children || children
  );
};

const NavigationPrev = ({ children, handleNavigation, currentPage }) => {
  const handleNavPrev = () => {
    handleNavigation(currentPage - 1);
  };

  return React.createElement(
    children.type || "div",
    {
      onClick: handleNavPrev,
      style: currentPage === 1 ? { opacity: "0.3", pointerEvents: "none" } : {}
    },
    children.props?.children || children
  );
};

export { NavigationStart, NavigationEnd, NavigationNext, NavigationPrev };
