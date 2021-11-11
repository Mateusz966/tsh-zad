import { Link } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import {ProductsHeader} from "../components/common/ProductsHeader/ProductsHeader";

export const Products = () => {
  return (
    <>
      <h2>Products page</h2>
      <Link to={AppRoute.LOGIN}> Login </Link>
      <ProductsHeader />
    </>
  );
};
