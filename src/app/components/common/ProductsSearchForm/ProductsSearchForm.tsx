import {FormProvider, useForm} from "react-hook-form"
import {Checkbox, Grid, Stack} from "@chakra-ui/react";
import {SearchInput} from "../SearchInput/SearchInput";

export const ProductsSearchForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
    <Grid gridTemplateColumns={["1fr", null, null, "400px 1fr"]} gridTemplateRows={["1fr 1fr", null, null, "1fr"]} as="form">
      <SearchInput placeholder="Search" name="search" />
      <Stack mt={[4, null, null, 0]} ml={[0, null, null, 8]} spacing={8} direction="row">
        <Checkbox size="lg">
          Active
        </Checkbox>
        <Checkbox  size="lg">
          Promo
        </Checkbox>
      </Stack>
    </Grid>
    </FormProvider>
  )
}