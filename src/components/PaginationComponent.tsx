import {
  ITEMS_PER_PAGE,
  PAGE,
  POSITION_CURRENT_PAGE,
  TOTAL_SHOWED_PAGES,
} from "@/utils/constants";
import { cbForArrayFrom, createUrl } from "@/utils/functions";
import Pagination from "react-bootstrap/Pagination";

export const PaginationComponent = ({
  totalElements,
  currentPage,
}: {
  totalElements: number;
  currentPage: number;
}) => {
  const totalPages = Math.ceil(totalElements / ITEMS_PER_PAGE);

  const pages = Array.from(
    { length: TOTAL_SHOWED_PAGES },
    cbForArrayFrom(currentPage, POSITION_CURRENT_PAGE, totalPages)
  );

  return (
    <Pagination size="sm">
      <Pagination.First href={createUrl(1, PAGE)} />
      <Pagination.Prev href={createUrl(currentPage - 1, PAGE)} />
      {pages.map((pageNumber) => (
        <Pagination.Item
          key={pageNumber}
          active={currentPage === pageNumber}
          href={createUrl(pageNumber, PAGE)}
        >
          {pageNumber}
        </Pagination.Item>
      ))}
      <Pagination.Next href={createUrl(currentPage + 1, PAGE)} />
      <Pagination.Last href={createUrl(totalPages, PAGE)} />
    </Pagination>
  );
};
