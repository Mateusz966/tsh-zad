import useSWR from "swr";
import {useProductList} from "./useProductList";
import {apiUrl} from "../../../../config/apiUrl";
import {fetcher} from "../../../../utils/fetcher";

export const ProductsList = () => {
  const { pageIndex, setPageIndex  } = useProductList();
  const { data, error } = useSWR(`${apiUrl}/products?search=&limit=4&page=${pageIndex}&promo=&active=`, fetcher);

  return <div>
    {data?.items?.map((item: any) => <div key={item.id}>{item.name}</div>)}
    <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
    <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
  </div>

}