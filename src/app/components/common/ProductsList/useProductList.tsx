import useSWR from "swr";
import {apiUrl} from "../../../../config/apiUrl";
import {fetcher} from "../../../../utils/fetcher";
import {ProductsRes} from "./ProductsList";

interface UseProductList {
  products: ProductsRes | undefined;
  error: boolean;
}

interface Props {
  promo: boolean;
  active: boolean;
  search?: string;
  currentPage?: number;
}

export const useProductList = ({ currentPage, promo, active, search }: Props): UseProductList => {
  const params = {
    search: search ?? '',
    active: active ? 'true' : '',
    promo: promo ? 'true' : '',
  };

  const queryParams = new URLSearchParams(params).toString();

  console.log(queryParams)


  const { data, error } = useSWR<ProductsRes>(`${apiUrl}/products?limit=8&page=${currentPage ?? 1}&${queryParams}`, fetcher);

  return {
    products: data,
    error,
  }
}