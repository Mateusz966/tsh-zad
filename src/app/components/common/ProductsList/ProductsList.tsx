import {Pagination} from "../Pagination/Pagination";
import {Box, Button, GridItem, Heading, Image, Text} from "@chakra-ui/react";
import {useProductsFilterContext} from "../../../../providers/ProductsFilterProvider";
import {ProductsGrid} from "../../layouts/ProductGrid/ProductsGrid";
import {AppSpinner} from "../AppSpinner/AppSpinner";
import {EmptyList} from "../EmptyList/EmptyList";

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
          promo
        }) => (
        <GridItem pos="relative" borderRadius="md" key={id} mb={2}>
          <Image
            borderTopLeftRadius="md"
            borderTopRightRadius="md"
            width="100%"
            height="170px"
            objectFit="cover"
            src={image}
          />
          {  promo && (
            <Box top="20px" left="0" bg="label" position="absolute" py={1} px={4}>
              <Text lineHeight="1" color="#fff">
                Promo
              </Text>
            </Box>
          ) }
          <Box pt={4} pb={6} bg="#fff" px="4">
            <Heading title={name} isTruncated mb={1} size="md" fontWeight="600">
              {name}
            </Heading>
            <Text height="110px" fontWeight="600" color="shadows.600">
              {description}
            </Text>
            <Button isDisabled={!active}>
              {active ? 'Show details' : 'Unavailable'}
            </Button>
          </Box>
        </GridItem>
        )
      )}
  </ProductsGrid>
  <Pagination  />
    </>
  );
}