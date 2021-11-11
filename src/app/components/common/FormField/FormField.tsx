import {FC} from "react";
import {FormControl, FormErrorMessage, FormHelperText, FormLabel} from "@chakra-ui/react";
import  { useFormContext } from "react-hook-form";

interface Props {
  name: string;
  label?: string;
  helperText?: string;
  isSearch?: boolean
}

export const FormField: FC<Props> = ({
    name,
    children,
    helperText,
    label,
    isSearch
  }) => {
  const { formState: { errors }} = useFormContext();
  return (
    <FormControl mb={isSearch ? 0 : 4} isInvalid={errors?.[name]}>
      {label && <FormLabel>{label}</FormLabel>}
      {children}
      {!isSearch && (
        <>
         <FormHelperText>{helperText}</FormHelperText>
         <FormErrorMessage>{errors?.[name] && errors?.[name]?.message}</FormErrorMessage>
        </>
        )}
    </FormControl>
  );
};
