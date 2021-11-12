import {useMemo, useState} from "react";

interface Props {
  currentPage: number;
  totalPages: number;
}

interface UsePagination {
  paginationRange: number[] | undefined;
}


const range = (start: number, end: number) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};


export const usePagination = ({currentPage, totalPages}: Props): UsePagination => {

  const paginationRange = useMemo(() => {
    const endRange = range(totalPages - 2, totalPages);
    const leftSibling = currentPage - 1;
    const rightSibling = currentPage + 1;
    if (totalPages <= 6) {
      return range(1, totalPages)
    } else {
      if (currentPage <= 2) {
        const startRange = range(1, 2);
        return [...startRange, ...endRange]
      } else {
        const middleRange = range(leftSibling, rightSibling);
        return [...middleRange, ...endRange]
      }
    }
  }, [currentPage, totalPages])

  return {
    paginationRange
  }

}