import React, { useEffect, useState } from "react";
import Pagination from ".";

const PageNumbers = ({
  children,
  totalPages,
  currentPage,
  handleNavigation,
  separator = "...",
  activePageNumberStyle,
  pageNumberStyle,
  hoverPageNumberStyle
}) => {
  const [pagesToDisplay, setPagesToDisplay] = useState([]);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(true);

  const modifiedCallBack = (page, index) => {
    const res = children(page, index);
    return React.createElement(
      Pagination.Page,
      {
        active: currentPage === page,
        handleNavigation,
        number: page,
        key: index,
        activePageNumberStyle,
        pageNumberStyle,
        hoverPageNumberStyle
      },
      res.props.children
    );
    // return res;
  };

  useEffect(() => {
    if (totalPages <= 5) {
      setPagesToDisplay([1, 2, 3, 4, 5]);
    } else if (currentPage <= 5 && totalPages >= 5) {
      setPagesToDisplay([1, 2, 3, 4, 5]);
      setShowStart(false);
      setShowEnd(true);
    } else if (currentPage <= totalPages && currentPage > totalPages - 5) {
      const tempArr = [];
      for (let i = totalPages - 4; i <= totalPages; i++) {
        tempArr.push(i);
      }
      setPagesToDisplay(tempArr);
      setShowStart(true);
      setShowEnd(false);
    } else {
      setPagesToDisplay([currentPage - 1, currentPage, currentPage + 1]);
      setShowStart(true);
      setShowEnd(true);
    }
  }, [currentPage, totalPages]);

  const startSide = () => {
    return showStart ? (
      <div className="saperate_page_number">
        <Pagination.Page
          activePageNumberStyle={activePageNumberStyle}
          pageNumberStyle={pageNumberStyle}
          hoverPageNumberStyle={hoverPageNumberStyle}
          handleNavigation={handleNavigation}
          number={1}
        >
          {1}
        </Pagination.Page>
        <b>{separator}</b>
      </div>
    ) : null;
  };

  const endSide = () => {
    return showEnd ? (
      <div className="saperate_page_number">
        <b>{separator}</b>
        <Pagination.Page
          activePageNumberStyle={activePageNumberStyle}
          pageNumberStyle={pageNumberStyle}
          number={totalPages}
          hoverPageNumberStyle={hoverPageNumberStyle}
          handleNavigation={handleNavigation}
        >
          {totalPages}
        </Pagination.Page>
      </div>
    ) : null;
  };

  const center = () => {
    return React.createElement(
      React.Fragment,
      null,
      pagesToDisplay.map(modifiedCallBack)
    );
  };

  return (
    <>
      {startSide()}
      {center()}
      {endSide()}
    </>
  );
};

export default PageNumbers;
