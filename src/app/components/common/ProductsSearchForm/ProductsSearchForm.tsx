import {Controller, FormProvider} from "react-hook-form"
import {Checkbox, Grid, Stack} from "@chakra-ui/react";
import {SearchInput} from "../SearchInput/SearchInput";
import {useProductsFilterContext} from "../../../../providers/ProductsFilterProvider";

export const ProductsSearchForm = () => {
  const { productsFilterContext: { productsSearchMethods: methods } } = useProductsFilterContext()
  
  return (
    <FormProvider {...methods}>
    <Grid
      gridTemplateColumns={["1fr", null, null, "400px 1fr"]}
      gridTemplateRows={["1fr 1fr", null, null, "1fr"]}
      as="form"
    >
      <SearchInput placeholder="Search" name="search" />
      <Stack mt={[4, null, null, 0]} ml={[0, null, null, 8]} spacing={8} direction="row">
        <Controller
          name="active"
          control={methods.control}
          render={({ field: { ref, ...rest } }) => (
              <Checkbox data-testid="active-filter" {...rest}>Active</Checkbox>
          )}
        />
        <Controller
          name="promo"
          control={methods.control}
          render={({ field: { ref, ...rest } }) => (
            <Checkbox data-testid="promo-filter" {...rest} value="promo">Promo</Checkbox>
          )}
        />
      </Stack>
    </Grid>
    </FormProvider>
  )
}