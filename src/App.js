import React, { useState } from "react";
import Pagination from "./components";

const CustomPage = ({ value, ...rest }) => {
  return <span {...rest}>{value}</span>;
};

const App = () => {
  const totalData = 1000;
  const dataPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const handleNavigation = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Pagination.Container
        totalData={totalData}
        dataPerPage={dataPerPage}
        totalPages={totalData / dataPerPage}
        currentPage={currentPage}
        handleNavigation={handleNavigation}
        navigationStyle={{ fontWeight: "700", margin: "10px" }}
        containerStyle={{
          border: "2px solid black",
          padding: "10px",
          margin: "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Pagination.NavigationStart style={{ fontWeight: "700" }}>
          {`|<`}
        </Pagination.NavigationStart>
        <Pagination.NavigationPrev
          style={{ fontWeight: "700" }}
        >{`<`}</Pagination.NavigationPrev>
        <Pagination.Pages
          separator=". . . ."
          activePageNumberStyle={{
            backgroundColor: "rgba(214, 213, 168, 0.6)"
          }}
          hoverPageNumberStyle={{
            backgroundColor: "rgba(214, 213, 168, 0.6)"
          }}
          pageNumberStyle={{
            fontWeight: "800",
            borderRadius: "100%",
            width: "30px",
            height: "30px",
            padding: "4px"
          }}
          showCorners={true}
        >
          {(page, index) => (
            <Pagination.Page key={index}>
              <CustomPage value={page} />
            </Pagination.Page>
          )}
        </Pagination.Pages>
        <Pagination.NavigationNext
          style={{ fontWeight: "700" }}
        >{`>`}</Pagination.NavigationNext>
        <Pagination.NavigationEnd
          style={{ fontWeight: "700" }}
        >{`>|`}</Pagination.NavigationEnd>
      </Pagination.Container>
    </div>
  );
};

export default App;
