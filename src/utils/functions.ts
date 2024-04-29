export const createUrl = (value: number | string, query: string) =>
  `/?${query}=${value}`;

export const cbForArrayFrom =
  (currentPage: number, totalPages: number, positionActivePage: number) =>
  (_: any, index: number) => {
    return (
      index +
      definePositionOfCurrentPage(currentPage, totalPages, positionActivePage)
    );
  };

const definePositionOfCurrentPage = (
  currentPage: number,
  positionActivePage: number,
  totalPages: number
) => {
  const startPosition = positionActivePage + 1;
  const lastPosition = totalPages - positionActivePage + 1;

  if (currentPage < startPosition) return 1;
  if (currentPage > lastPosition) return lastPosition - positionActivePage;

  return currentPage - positionActivePage;
};
