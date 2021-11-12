import {
  ReactElement,
  createContext,
  ReactNode,
  useContext, useState, useEffect, SetStateAction, Dispatch,
} from 'react';
import {useProductsSearchForm} from "../app/components/common/ProductsSearchForm/useProductsSearchForm";
import {UseFormReturn} from "react-hook-form";
import {usePagination} from "../app/components/common/Pagination/usePagination";
import {useProductList} from "../app/components/common/ProductsList/useProductList";
import {ProductsRes} from "../app/components/common/ProductsList/ProductsList";

type ProductsFilterProviderProps = { children: ReactNode };

type ProductsFilterState = {
  productsSearchMethods: UseFormReturn;
  products: ProductsRes | undefined;
  productsError: boolean;
  paginationRange: number[] | undefined;
  currentPage: number;
  totalPages: number;
};

type ProductsFilterDispatch = {
 setCurrentPage: Dispatch<SetStateAction<number>>
};

const ProductsFilterContext = createContext<ProductsFilterState | undefined>(undefined);
const ProductsFilterDispatchContext = createContext<ProductsFilterDispatch | undefined>(undefined);

const ProductsFilterProvider = ({ children }: ProductsFilterProviderProps): ReactElement => {

  const [totalPages, setTotalPages] = useState(0);

  const { methods: productsSearchMethods, search, promo, active } = useProductsSearchForm();
  const { paginationRange, setCurrentPage, currentPage } = usePagination({totalPages});
  const { products, error } = useProductList({currentPage, setCurrentPage, promo, active, search})

  useEffect(() => {
    if (products?.meta.totalPages !== totalPages) {
      setTotalPages(products?.meta.totalPages ?? 0)
    }
  }, [products]);

  return (
    <ProductsFilterContext.Provider value={{
      productsSearchMethods,
      paginationRange,
      currentPage,
      products,
      productsError: error,
      totalPages
    }}>
      <ProductsFilterDispatchContext.Provider value={{ setCurrentPage }}>
        {children}
      </ProductsFilterDispatchContext.Provider>
    </ProductsFilterContext.Provider>
  );
};

const useProductsFilterContext = () => {
  const productsFilterContext = useContext(ProductsFilterContext);
  const productsFilterDispatchContext = useContext(ProductsFilterDispatchContext);
  if (productsFilterContext === undefined || productsFilterDispatchContext === undefined) {
    throw new Error('useProductsFilterContext must be used within a ProductsProvider');
  }
  return { productsFilterContext, productsFilterDispatchContext };
};

export { ProductsFilterProvider, useProductsFilterContext };
