import useSWR from "swr";
import {useProductList} from "./useProductList";
import {apiUrl} from "../../../../config/apiUrl";
import {fetcher} from "../../../../utils/fetcher";
import {Pagination} from "../Pagination/Pagination";
import {Spinner} from "@chakra-ui/react";

export type ProductsRes = {
  items: [
  {
    id: number,
    name: string,
    description: string,
    rating: number,
    image: string,
    promo: boolean,
    active: boolean
  }
],
  meta: {
  itemCount: number,
    totalItems: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number
},
  links: {
  first: string,
    previous: string,
    next: string,
    last: string
 }
}

export const ProductsList = () => {
  const { pageIndex, setPageIndex  } = useProductList();
  const { data, error } = useSWR<ProductsRes>(`${apiUrl}/products?search=&limit=3&page=${pageIndex}&promo=&active=`, fetcher);
  console.log(error);
  console.log(data)
  if (!data) {
   return <Spinner />
  }
  return <div>
    {data?.items?.map((item) => <div key={item.id}>{item.name}</div>)}
    <button onClick={() => setPageIndex(1)}>First</button>
    <Pagination currentPage={3} totalPages={data.meta.totalPages} />
    <button onClick={() => setPageIndex(data.meta.totalPages)}>Last</button>
  </div>

}