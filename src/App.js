import React, { useState } from "react";
import Pagination from "./components/pagination";

const App = () => {
  const totalData = 1000;
  const dataPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigation = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Pagination
        totalData={totalData}
        dataPerPage={dataPerPage}
        currentPage={currentPage}
        handleNavigation={handleNavigation}
      />
    </div>
  );
};

export default App;
