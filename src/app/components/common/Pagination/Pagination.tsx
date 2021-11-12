import {FC} from "react";
import {Box, Button} from "@chakra-ui/react";
import {usePagination} from "./usePagination";


interface Props {
  currentPage: number;
  totalPages: number | undefined;
}



export const Pagination:FC<Props> = ({totalPages, currentPage}) => {
  if (!totalPages) return null;
  const { paginationRange } = usePagination({currentPage, totalPages});
  return paginationRange ? <Box>{paginationRange?.map((pag: any) => pag)}</Box> : null;
}