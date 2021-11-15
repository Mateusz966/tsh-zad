import useSWR from "swr";
import {apiUrl} from "../../../../config/apiUrl";
import {fetcher} from "../../../../utils/fetcher";
import {ProductsRes} from "./ProductsList";
import {Dispatch, SetStateAction, useEffect} from "react";

interface UseProductList {
  products: ProductsRes | undefined;
  error: boolean;
}

interface Props {
  promo: boolean;
  active: boolean;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  search?: string;
  currentPage?: number;
}

export const useProductList = ({ currentPage, setCurrentPage, promo, active, search }: Props): UseProductList => {

  const params = {
    search: search ?? '',
    active: active ? 'true' : '',
    promo: promo ? 'true' : '',
  };

  const queryParams = new URLSearchParams(params).toString();

  const { data, error } = useSWR<ProductsRes>(`${apiUrl}/products?limit=8&page=${currentPage ?? 1}&${queryParams}`, fetcher);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, active, promo])

  return {
    products: data,
    error,
  }
}