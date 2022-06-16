import Page from "./Page";
import PageNumbers from "./pages";
import Container from "./pagination";
import paginationNav, {
  NavigationEnd,
  NavigationNext,
  NavigationPrev,
  NavigationStart
} from "./navigation";

const pagination = {
  Container: Container,
  Page: Page,
  Pages: PageNumbers,
  NavigationStart: paginationNav(NavigationStart),
  NavigationEnd: paginationNav(NavigationEnd),
  NavigationNext: paginationNav(NavigationNext),
  NavigationPrev: paginationNav(NavigationPrev)
};

export default pagination;
