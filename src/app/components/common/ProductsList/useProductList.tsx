import {Dispatch, SetStateAction, useState} from "react";

interface UseProductList {
  pageIndex: number;
  setPageIndex:  Dispatch<SetStateAction<number>>
}

export const useProductList = (): UseProductList => {
  const [pageIndex, setPageIndex ] = useState(1)
  return {
    pageIndex,
    setPageIndex
  }
}