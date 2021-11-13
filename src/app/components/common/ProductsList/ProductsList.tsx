import {Pagination} from "../Pagination/Pagination";
import {useProductsFilterContext} from "../../../../providers/ProductsFilterProvider";
import {ProductsGrid} from "../../layouts/ProductGrid/ProductsGrid";
import {AppSpinner} from "../AppSpinner/AppSpinner";
import {EmptyList} from "../EmptyList/EmptyList";
import {ProductCard, ProductCardProps} from "../ProductCard/ProductCard";

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

  const { productsFilterContext: { products } } = useProductsFilterContext()

  if (!products?.items) {
   return <AppSpinner />
  }

  if (!products.items.length) {
    return <EmptyList />
  }

  return (
  <>
    <ProductsGrid>
      {products?.items?.map(({
          active,
          name,
          image,
          description,
          id,
          promo,
          rating,
        }: ProductCardProps) => (
        <ProductCard
          id={id}
          name={name}
          image={image}
          description={description}
          promo={promo}
          active={active}
          rating={rating}
        />
        )
      )}
  </ProductsGrid>
  <Pagination  />
    </>
  );
}