import {Dispatch, SetStateAction, useMemo, useState} from "react";

interface Props {
  totalPages: number;
}

interface UsePagination {
  paginationRange: number[] | undefined;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  currentPage: number;
}


const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};
 const elementsToShow = 6;

export const usePagination = ({ totalPages }: Props): UsePagination => {
  const [currentPage, setCurrentPage] = useState(1);


  const paginationRange = useMemo(() => {
    const endRange = range(totalPages - 2, totalPages);
    const leftSibling = currentPage - 1;
    const rightSibling = Math.min(currentPage + 1, totalPages - 3);
    if (totalPages <= elementsToShow) {
      return range(1, totalPages);
    } else {
      if (currentPage <= 2) {
        const startRange = range(1, 3);
        return [...startRange, ...endRange]
      } else {
        const middleRange = range(leftSibling, rightSibling);
        return [...middleRange, ...endRange]
      }
    }
  }, [currentPage, totalPages])

  return {
    paginationRange,
    setCurrentPage,
    currentPage,
  }

}