# EasyPagination

## About

EasyPagination library helps you to make fully dynamic pagination UI which you can design however you wish. It is very customisable and easy to use.

# Usage

### components:

- Pagination.Container
- Pagination.Pages
- Pagination.Page
- Pagination.NavigationStart
- Pagination.NavigationPrev
- Pagination.NavigationNext
- Pagination.NavigationEnd

### props:

#### **Container :**

- totalData
- dataPerPage
- totalPages
- currentPage
- handleNavigation
- navigationStyle
- containerStyle

### **Pages :**

- separator
- activePageNumberStyle
- pageNumberStyle
- hoverPageNumberStyle
- showCorners

### **NavigationStart, NavigationPrev, NavigationNext, NavigationEnd :**

- style

### Example:

Wrap everything inside Pagination.Container. You can use the navigation components anywhere you wish to display them inside the container. Inside Pagination.Pages you will receive a callback function with two args i.e. **pageNumber and index**.
If you wish to use a custom component inside your Pagination.Pages callback then just receive the extra props in the customComponent and pass them to it's first element like shown below **after the 1st example.**

```
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
          {(pageNumber, index) => (
            <Pagination.Page key={index}>
              {pageNumber}
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
```

---

```
const CustomPage = ({ value, ...rest }) => {
  return <span {...rest}>{value}</span>;
};


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
          {(pageNumber, index) => (
            <Pagination.Page key={index}>
              <CustomPage value={pageNumber} />
            </Pagination.Page>
          )}
        </Pagination.Pages>
```
