import {FC} from "react";
import { Button, Flex} from "@chakra-ui/react";
import {useProductsFilterContext} from "../../../../providers/ProductsFilterProvider";



export const Pagination:FC = () => {

  const { productsFilterContext:
    { totalPages, currentPage, paginationRange },
    productsFilterDispatchContext: { setCurrentPage }
  } = useProductsFilterContext();

  if (!totalPages) return null;


  return paginationRange ? (
    <Flex bg="#F2F2F2" gridColumnStart="span 4" justifyContent="center" mx="auto">
      <Button
       onClick={() => setCurrentPage(1)}
       variant="pagination"
      >
        First
      </Button>
      {paginationRange?.map((pag) =>
        <Button
          isActive={pag === currentPage}
          key={Math.random()}
          onClick={() => setCurrentPage(pag)}
          variant="pagination"
        >
          {pag}
        </Button>
      )}
      <Button
        onClick={() => setCurrentPage(totalPages)}
        variant="pagination"
      >
        Last
      </Button>
    </Flex> ) : null;
}