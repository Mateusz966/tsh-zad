import {ProductsHeader} from "../components/common/ProductsHeader/ProductsHeader";
import {ProductsList} from "../components/common/ProductsList/ProductsList";
import {ProductsFilterProvider} from "../../providers/ProductsFilterProvider";

export const Products = () => {
  return (
      <ProductsFilterProvider>
        <ProductsHeader />
        <ProductsList />
     </ProductsFilterProvider>
  );
};
