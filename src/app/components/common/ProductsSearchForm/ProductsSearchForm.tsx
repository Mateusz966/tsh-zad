import {FormProvider, useForm} from "react-hook-form"
import {AppInput} from "../Input/Input";
import {Checkbox, Stack} from "@chakra-ui/react";

export const ProductsSearchForm = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
    <form>
      <AppInput placeholder="Search" name="search" />
      <Stack spacing={5} direction="row">
        <Checkbox size="lg" borderColor="shadows.100" borderStyle="solid" borderWidth="1px" borderRadius="3px">
          Active
        </Checkbox>
        <Checkbox  size="lg" borderColor="shadows.100" borderStyle="solid" borderWidth="1px" borderRadius="3px">
          Promo
        </Checkbox>
      </Stack>
    </form>
    </FormProvider>
  )
}