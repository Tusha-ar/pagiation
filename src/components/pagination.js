import React, { useEffect, useMemo, useState } from "react";
import Navigation from "./navigation";
import Page from "./Page";
import "./styles.css";

const Pagination = ({
  totalData,
  dataPerPage,
  currentPage,
  iconToStart = undefined,
  iconPrev = undefined,
  iconNext = undefined,
  iconToEnd = undefined,
  iconClassname = undefined,
  pageIconClassname = undefined,
  currentPageStyle = undefined,
  handleNavigation,
}) => {
  const [pagesToDisplay, setPagesToDisplay] = useState([]);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(true);
  const totalPages = useMemo(
    () => Math.ceil(totalData / dataPerPage),
    [totalData, dataPerPage]
  );

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
      console.log(tempArr);
      setPagesToDisplay(tempArr);
      setShowStart(true);
      setShowEnd(false);
    } else {
      setPagesToDisplay([currentPage - 1, currentPage, currentPage + 1]);
      setShowStart(true);
      setShowEnd(true);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="pagination_container">
      <Navigation
        handleNavigation={handleNavigation}
        icon={iconToStart || "|<"}
        iconClassname={iconClassname}
        disable={currentPage === 1}
        currentPage={currentPage}
        type="first"
      />
      <Navigation
        handleNavigation={handleNavigation}
        icon={iconPrev || "<"}
        iconClassname={iconClassname}
        disable={currentPage === 1}
        currentPage={currentPage}
        type="prev"
      />
      {showStart && (
        <div className="saperate_page_number">
          <Page
            handleNavigation={handleNavigation}
            currentPage={currentPage === 1}
            currentPageStyle={currentPageStyle || "current_page"}
            pageIconClassname={pageIconClassname || "page_number"}
            number={1}
          />
          <b>. . . . .</b>
        </div>
      )}
      {pagesToDisplay.map((val, index) => (
        <div key={index}>
          <Page
            handleNavigation={handleNavigation}
            currentPage={currentPage === val}
            currentPageStyle={currentPageStyle || "current_page"}
            pageIconClassname={pageIconClassname || "page_number"}
            number={val}
          />
        </div>
      ))}
      {showEnd && (
        <div className="saperate_page_number">
          <b>. . . . .</b>
          <Page
            handleNavigation={handleNavigation}
            currentPage={currentPage === totalPages}
            currentPageStyle={currentPageStyle || "current_page"}
            pageIconClassname={pageIconClassname || "page_number"}
            number={totalPages}
          />
        </div>
      )}
      <Navigation
        handleNavigation={handleNavigation}
        icon={iconNext || ">"}
        iconClassname={iconClassname}
        disable={currentPage === totalPages}
        currentPage={currentPage}
        type="next"
      />
      <Navigation
        handleNavigation={handleNavigation}
        icon={iconToEnd || ">|"}
        iconClassname={iconClassname}
        disable={currentPage === totalPages}
        currentPage={currentPage}
        totalPages={totalPages}
        type="last"
      />
    </div>
  );
};

export default Pagination;
