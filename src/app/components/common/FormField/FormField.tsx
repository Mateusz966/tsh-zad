import {FC} from "react";
import {FormControl, FormErrorMessage, FormHelperText, FormLabel} from "@chakra-ui/react";
import  { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  helperText?: string;
}

export const FormField: FC<Props> = ({
    name,
    children,
    helperText,
    label
  }) => {
  const { formState: { errors }} = useFormContext();
  console.log(errors)
  return (
    <FormControl mb={4} isInvalid={errors?.[name]}>
      <FormLabel>{label}</FormLabel>
      {children}
      <FormHelperText>{helperText}</FormHelperText>
      <FormErrorMessage>{errors?.[name] && errors?.[name]?.message}</FormErrorMessage>
    </FormControl>
  );
};
